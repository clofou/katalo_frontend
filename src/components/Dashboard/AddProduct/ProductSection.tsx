import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormProvider, // Ajouté
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PlusCircle, Save, Search, Trash, Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState, useRef, type ChangeEvent } from "react";

// Schéma Zod
const formSchema = z.object({
  productName: z.string().min(2, {
    message: "Le nom du produit doit contenir au moins 2 caractères.",
  }),
  description: z.string().min(10, {
    message: "La description doit contenir au moins 10 caractères.",
  }),
  price: z.coerce.number().positive("Le prix doit être positif"),
  discountedPrice: z.coerce.number().optional(),
  taxIncluded: z.enum(["yes", "no"], {
    required_error: "Veuillez sélectionner une option",
  }),
  expirationStart: z.string().optional(),
  expirationEnd: z.string().optional(),
  stockQuantity: z.coerce.number().optional(),
  stockStatus: z.enum(["unlimited", "inStock", "outOfStock"]),
  isFeatured: z.boolean(),
  categories: z.string().array().optional(),
  tags: z.string().array().optional(),
  color: z.string().optional(),
});

export const ProductSection = () => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "iPhone 15",
      description: "The iPhone 15 delivers cutting-edge performance with the A16 Bionic chip, an immersive Super Retina XDR display, advanced dual-camera system, and exceptional battery life, all encased in stunning aerospace-grade aluminum.",
      price: 999.89,
      discountedPrice: 99,
      taxIncluded: "yes",
      stockStatus: "inStock",
      isFeatured: true,
      expirationStart: undefined,
      expirationEnd: undefined,
      stockQuantity: undefined,
      categories: [],
      tags: [],
      color: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const discountAmount = form.watch("price") - (form.watch("discountedPrice") || 0);

  // Gestion de l'upload des images
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newPreviews: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target?.result) {
          newPreviews.push(event.target.result as string);
          if (newPreviews.length === files.length) {
            setPreviewImages([...previewImages, ...newPreviews]);
          }
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeImage = (index: number) => {
    const newPreviews = [...previewImages];
    newPreviews.splice(index, 1);
    setPreviewImages(newPreviews);
  };

  return (
    <FormProvider {...form}> {/* Wrapper global avec FormProvider */}
      <div className="flex flex-col gap-7">
        <header className="flex flex-col md:flex-row md:justify-between justify-between items-center">
          <h1 className="text-xl font-bold hidden md:flex">
            Ajouter un nouveau produit
          </h1>
          <div className="flex flex-col-reverse md:flex-row gap-4 items-start md:justify-end">
            <div className="relative w-dvw max-w-md md:max-w-xs md:min-w-[300px] flex-1 order-2 md:order-none">
              <Search
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-400"
                size={18}
              />
              <Input
                type="text"
                placeholder="Rechercher un produit a ajouter"
                className="pr-10 pl-4 py-2 rounded-md bg-[#f8f9fa] dark:bg-[#232c3b] border-0 focus:ring-0 text-sm shadow-none text-[#00332e] dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-row-reverse gap-2 w-full md:flex-row md:justify-end md:w-auto justify-between">
              <div className="flex row-reverse gap-2">
                <Button type="submit" form="product-form"> {/* Ajout de type et form */}
                  publier
                </Button>
                <Button className="md:w-30" variant="secondary">
                  <Save className="mr-2 h-4 w-4" /> Brouillon
                </Button>
              </div>
              <Button variant="secondary">
                <PlusCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        <Form {...form}> {/* Formulaire principal */}
          <form 
            id="product-form" 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="flex flex-col md:flex-row gap-6"
          >
            {/* Conteneur gauche - Informations produit */}
            <Card className="w-full md:w-1/2 p-5">
              <CardHeader>
                <CardTitle>Informations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="productName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom du Produit</FormLabel>
                      <FormControl>
                        <Input placeholder="Entrer le nom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description du produit</FormLabel>
                      <FormControl>
                        <textarea
                          placeholder="Description du produit"
                          className="flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4 pt-4">
                  <h3 className="font-medium">Prix</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prix du produit</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="discountedPrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prix réduit (Optionnel)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {form.watch("discountedPrice") && (
                    <div className="text-sm text-muted-foreground">
                      Réduction: ${discountAmount.toFixed(2)}
                    </div>
                  )}

                  <FormField
                    control={form.control}
                    name="taxIncluded"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Taxes incluses</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex space-x-4"
                          >
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <FormLabel className="font-normal">Oui</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <FormLabel className="font-normal">Non</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-medium">Expiration</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="expirationStart"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Début</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="expirationEnd"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fin</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conteneur droit - Images et catégories */}
            <Card className="w-full md:w-1/2 p-5">
              <CardHeader>
                <CardTitle>Images et catégories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Section Upload d'images */}
                <div className="space-y-4">
                  <h3 className="font-medium">Image du produit</h3>
                  
                  {/* Zone de prévisualisation */}
                  <div className="grid grid-cols-3 gap-4">
                    {previewImages.map((src, index) => (
                      <div key={index} className="relative group">
                        <img 
                          src={src} 
                          alt={`Preview ${index}`} 
                          className="rounded-md object-cover h-32 w-full border"
                        />
                        <Button 
                          variant="destructive" 
                          size="icon"
                          className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeImage(index)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                        {index === 0 && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 text-center">
                            Image principale
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* Zone d'upload */}
                    <div 
                      className="border-2 border-dashed rounded-md flex flex-col items-center justify-center h-32 cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={triggerFileInput}
                    >
                      <Upload className="h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500">Browse</p>
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={triggerFileInput}>
                      <PlusCircle className="mr-2 h-4 w-4" /> Add Image
                    </Button>
                    <Button variant="outline" disabled={previewImages.length === 0}>
                      <Upload className="mr-2 h-4 w-4" /> Replace
                    </Button>
                  </div>
                </div>

                {/* Section Catégories */}
                <div className="space-y-4">
                  <h3 className="font-medium">Categories</h3>
                  <FormField
                    control={form.control}
                    name="categories"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Categories</FormLabel>
                        <Select 
                          onValueChange={(value) => 
                            field.onChange([...(field.value || []), value])
                          }
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your product" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="electronics">Électronique</SelectItem>
                            <SelectItem value="phones">Téléphones</SelectItem>
                            <SelectItem value="accessories">Accessoires</SelectItem>
                            <SelectItem value="computers">Ordinateurs</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                        
                        {/* Affichage des catégories sélectionnées */}
                        <div className="flex flex-wrap gap-2 mt-2">
                          {field.value?.map((category, index) => (
                            <div 
                              key={index} 
                              className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm flex items-center"
                            >
                              {category}
                              <button 
                                type="button"
                                className="ml-2 text-red-500"
                                onClick={() => {
                                  const newCategories = [...(field.value || [])];
                                  newCategories.splice(index, 1);
                                  field.onChange(newCategories);
                                }}
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Section Tags */}
                <div className="space-y-4">
                  <h3 className="font-medium">Product Tag</h3>
                  <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tags</FormLabel>
                        <Select 
                          onValueChange={(value) => 
                            field.onChange([...(field.value || []), value])
                          }
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your product" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="new">Nouveau</SelectItem>
                            <SelectItem value="sale">Promotion</SelectItem>
                            <SelectItem value="featured">En vedette</SelectItem>
                            <SelectItem value="popular">Populaire</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                        
                        {/* Affichage des tags sélectionnés */}
                        <div className="flex flex-wrap gap-2 mt-2">
                          {field.value?.map((tag, index) => (
                            <div 
                              key={index} 
                              className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm flex items-center"
                            >
                              {tag}
                              <button 
                                type="button"
                                className="ml-2 text-red-500"
                                onClick={() => {
                                  const newTags = [...(field.value || [])];
                                  newTags.splice(index, 1);
                                  field.onChange(newTags);
                                }}
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Section Couleur */}
                <div className="space-y-4">
                  <h3 className="font-medium">Couleur</h3>
                  <FormField
                    control={form.control}
                    name="color"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select your color</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choisir une couleur" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="black">Noir</SelectItem>
                            <SelectItem value="white">Blanc</SelectItem>
                            <SelectItem value="blue">Bleu</SelectItem>
                            <SelectItem value="red">Rouge</SelectItem>
                            <SelectItem value="green">Vert</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
          </form>
        </Form>
      </div>
    </FormProvider>
  );
};