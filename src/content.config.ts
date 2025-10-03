import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

// Definición de la Colección
const blogCollection = defineCollection ({
    loader: glob({ pattern: "**/*.mdx", base: "./src/contenido/blog" }),
    schema: ({ image }) => z.object({
        titulo: z.string(),
        fecha: z.date(),
        descripcion: z.string(),
        imagen: image(),

        // Relación a Autor
        autor: reference("autor"),

        // Relación a Etiquetas
        etiquetas: z.array(z.string()),

        // ¿Es un borrador?
        esBorrador: z.boolean().default(false)
    })
});

// Colección de Autores
const autorCollection = defineCollection({
    loader: glob({ pattern: "**/*.yml", base: "./src/contenido/autor" }),
    schema: ({ image }) => z.object({
        nombre: z.string(),
        avatar: image()
    })
});

// Exportar la Colección
export const collections = {
    blog: blogCollection,
    autor: autorCollection
}