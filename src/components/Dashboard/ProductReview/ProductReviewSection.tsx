import { useState } from 'react';
import { 
  Star, 
  Frown, 
  Meh, 
  Smile, 
  StarHalf, 
  ChevronDown, 
  Filter,
  Search,
  MoreVertical,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Upload
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Checkbox } from '@radix-ui/react-checkbox';

const ProductReviewSection = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [expandedReview, setExpandedReview] = useState<number | null>(null);
  
  // Données de test pour les avis
  const reviews = [
    {
      id: 1,
      userName: 'Alex Johnson',
      userAvatar: '',
      rating: 5,
      date: '2023-10-15',
      title: 'Excellent produit!',
      content: 'Ce produit a dépassé toutes mes attentes. La qualité est exceptionnelle et il est très facile à utiliser. Je le recommande vivement à tous ceux qui recherchent une solution fiable et performante.',
      helpfulCount: 24,
      unhelpfulCount: 2,
      verifiedPurchase: true,
      images: ['/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg']
    },
    {
      id: 2,
      userName: 'Sophie Martin',
      userAvatar: '',
      rating: 4,
      date: '2023-10-10',
      title: 'Très bon produit avec quelques réserves',
      content: 'Globalement satisfaite de mon achat. Le produit fonctionne bien mais j\'ai rencontré quelques problèmes mineurs lors de la configuration. Le service client a été réactif et a résolu mon problème rapidement.',
      helpfulCount: 18,
      unhelpfulCount: 5,
      verifiedPurchase: true,
      images: ['/placeholder.jpg']
    },
    {
      id: 3,
      userName: 'Thomas Dupont',
      userAvatar: '',
      rating: 3,
      date: '2023-10-05',
      title: 'Correct mais peut mieux faire',
      content: 'Le produit est correct pour son prix, mais j\'ai noté quelques défauts de fabrication. La batterie ne tient pas aussi longtemps que promis. Cela fait le travail mais je m\'attendais à mieux.',
      helpfulCount: 8,
      unhelpfulCount: 1,
      verifiedPurchase: false,
      images: []
    },
    {
      id: 4,
      userName: 'Emma Rodriguez',
      userAvatar: '',
      rating: 5,
      date: '2023-09-28',
      title: 'Incroyable!',
      content: 'Je l\'utilise tous les jours depuis un mois et je suis toujours aussi impressionnée. La qualité est au rendez-vous et il a vraiment amélioré ma productivité. Un must-have!',
      helpfulCount: 32,
      unhelpfulCount: 0,
      verifiedPurchase: true,
      images: ['/placeholder.jpg', '/placeholder.jpg']
    },
    {
      id: 5,
      userName: 'Michael Chen',
      userAvatar: '',
      rating: 2,
      date: '2023-09-20',
      title: 'Déçu par la qualité',
      content: 'Après seulement deux semaines d\'utilisation, le produit a commencé à montrer des signes de faiblesse. Je m\'attendais à une meilleure durabilité pour le prix payé. Le service après-vente a été lent à répondre à ma réclamation.',
      helpfulCount: 12,
      unhelpfulCount: 3,
      verifiedPurchase: true,
      images: []
    }
  ];
  
  // Statistiques des notes
  const ratingStats = {
    average: 4.2,
    total: 128,
    distribution: {
      5: 68,
      4: 32,
      3: 15,
      2: 8,
      1: 5
    }
  };
  
  // Fonction pour afficher les étoiles
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<StarHalf key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return <div className="flex">{stars}</div>;
  };
  
  // Filtrer les avis
  const filteredReviews = reviews.filter(review => {
    if (filter === 'all') return true;
    if (filter === 'positive' && review.rating >= 4) return true;
    if (filter === 'neutral' && review.rating === 3) return true;
    if (filter === 'negative' && review.rating <= 2) return true;
    if (filter === 'verified' && review.verifiedPurchase) return true;
    return false;
  });
  
  // Trier les avis
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === 'helpful') {
      return b.helpfulCount - a.helpfulCount;
    } else if (sortBy === 'highest') {
      return b.rating - a.rating;
    } else {
      return a.rating - b.rating;
    }
  });
  
  // Fonction pour obtenir l'icône de sentiment
  const getSentimentIcon = (rating: number) => {
    if (rating >= 4) return <Smile className="w-5 h-5 text-green-500" />;
    if (rating === 3) return <Meh className="w-5 h-5 text-yellow-500" />;
    return <Frown className="w-5 h-5 text-red-500" />;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle className="text-2xl">Avis des clients</CardTitle>
            <Button variant="outline" className="w-full md:w-auto">
              Écrire un avis
            </Button>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Résumé des notes */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="text-5xl font-bold mr-4">{ratingStats.average}</div>
                <div>
                  <div className="flex mb-1">
                    {renderStars(ratingStats.average)}
                  </div>
                  <div className="text-gray-600">
                    Basé sur {ratingStats.total} avis
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center">
                    <div className="w-10 text-sm text-gray-600">{stars} étoiles</div>
                    <Progress 
                      value={(ratingStats.distribution[stars as keyof typeof ratingStats.distribution] / ratingStats.total) * 100} 
                      className="mx-2 w-full h-2" 
                    />
                    <div className="w-10 text-right text-sm text-gray-600">
                      {ratingStats.distribution[stars as keyof typeof ratingStats.distribution]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Filtres et options de tri */}
            <div className="lg:col-span-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant={filter === 'all' ? 'default' : 'outline'} 
                    onClick={() => setFilter('all')}
                  >
                    Tous
                  </Button>
                  <Button 
                    variant={filter === 'positive' ? 'default' : 'outline'} 
                    onClick={() => setFilter('positive')}
                    className="flex items-center gap-1"
                  >
                    <Smile className="w-4 h-4" /> Positifs
                  </Button>
                  <Button 
                    variant={filter === 'neutral' ? 'default' : 'outline'} 
                    onClick={() => setFilter('neutral')}
                    className="flex items-center gap-1"
                  >
                    <Meh className="w-4 h-4" /> Neutres
                  </Button>
                  <Button 
                    variant={filter === 'negative' ? 'default' : 'outline'} 
                    onClick={() => setFilter('negative')}
                    className="flex items-center gap-1"
                  >
                    <Frown className="w-4 h-4" /> Négatifs
                  </Button>
                  <Button 
                    variant={filter === 'verified' ? 'default' : 'outline'} 
                    onClick={() => setFilter('verified')}
                  >
                    Achat vérifié
                  </Button>
                </div>
                
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">Trier par:</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="gap-1">
                        {sortBy === 'recent' && 'Plus récents'}
                        {sortBy === 'helpful' && 'Plus utiles'}
                        {sortBy === 'highest' && 'Note la plus haute'}
                        {sortBy === 'lowest' && 'Note la plus basse'}
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setSortBy('recent')}>
                        Plus récents
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortBy('helpful')}>
                        Plus utiles
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortBy('highest')}>
                        Note la plus haute
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortBy('lowest')}>
                        Note la plus basse
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="text" 
                  placeholder="Rechercher dans les avis..." 
                  className="pl-10"
                />
              </div>
              
              {/* Liste des avis */}
              <div className="space-y-6">
                {sortedReviews.map((review) => (
                  <Card key={review.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-shrink-0">
                          <Avatar>
                            <AvatarImage src={review.userAvatar} alt={review.userName} />
                            <AvatarFallback>
                              {review.userName.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <div className="font-medium">{review.userName}</div>
                            <div className="flex items-center gap-2">
                              {review.verifiedPurchase && (
                                <Badge variant="secondary">Achat vérifié</Badge>
                              )}
                              <div className="text-sm text-gray-500">
                                {new Date(review.date).toLocaleDateString('fr-FR')}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex">
                              {renderStars(review.rating)}
                            </div>
                            <div className="flex items-center gap-1">
                              {getSentimentIcon(review.rating)}
                              <span className="text-sm">
                                {review.rating >= 4 ? 'Positif' : review.rating === 3 ? 'Neutre' : 'Négatif'}
                              </span>
                            </div>
                          </div>
                          
                          <h3 className="font-semibold mb-2">{review.title}</h3>
                          
                          <div className="mb-3">
                            <p className={expandedReview === review.id ? "" : "line-clamp-3"}>
                              {review.content}
                            </p>
                            <button 
                              onClick={() => setExpandedReview(expandedReview === review.id ? null : review.id)}
                              className="text-blue-600 hover:underline text-sm mt-1"
                            >
                              {expandedReview === review.id ? 'Voir moins' : 'Lire la suite'}
                            </button>
                          </div>
                          
                          {/* Images de l'avis */}
                          {review.images.length > 0 && (
                            <div className="flex gap-2 mb-4">
                              {review.images.map((img, idx) => (
                                <div 
                                  key={idx} 
                                  className="w-16 h-16 rounded-md border overflow-hidden cursor-pointer"
                                >
                                  <img 
                                    src={img} 
                                    alt={`Image ${idx + 1}`} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between">
                            <div className="flex gap-4">
                              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                                <ThumbsUp className="w-4 h-4" />
                                <span>Utile ({review.helpfulCount})</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                                <ThumbsDown className="w-4 h-4" />
                                <span>Pas utile ({review.unhelpfulCount})</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                                <MessageSquare className="w-4 h-4" />
                                <span>Répondre</span>
                              </Button>
                            </div>
                            
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreVertical className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem>
                                  <Flag className="w-4 h-4 mr-2" />
                                  Signaler
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex gap-2">
                  <Button variant="outline" disabled>
                    Précédent
                  </Button>
                  <Button variant="default">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">4</Button>
                  <Button variant="outline">5</Button>
                  <Button variant="outline">
                    Suivant
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Section d'écriture d'avis */}
      <Card>
        <CardHeader>
          <CardTitle>Écrire un avis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-4">Votre évaluation</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl font-bold">4.2</div>
                <div>
                  <div className="flex mb-1">
                    {renderStars(4.2)}
                  </div>
                  <div className="text-gray-600">Cliquez sur les étoiles pour noter</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 font-medium">Titre de l'avis</label>
                  <Input placeholder="Résumez votre expérience" />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Votre avis</label>
                  <textarea 
                    placeholder="Partagez votre expérience avec ce produit" 
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Ajouter des photos (optionnel)</label>
                  <div className="border-2 border-dashed rounded-md h-32 flex items-center justify-center">
                    <div className="text-center">
                      <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500">Glissez-déposez des photos ici ou cliquez pour parcourir</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">À propos de vous</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 font-medium">Nom</label>
                  <Input placeholder="Votre nom" />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <Input placeholder="Votre email" type="email" />
                </div>
                
                <div className="flex items-start">
                  <Checkbox id="verified" className="mt-1 mr-2" />
                  <label htmlFor="verified" className="text-sm">
                    Je confirme que j'ai acheté ce produit sur ce site
                  </label>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full">Soumettre l'avis</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductReviewSection;