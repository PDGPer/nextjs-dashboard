/* Les polices sont importées pour éviter le décalage de mise en page cumulatif, c'est-à-dire que
l'interface utilisateur est momentanément perturbée car la police de secours est utilisée avant
que la police finale n'ait fini de se charger. */
import { Inter, Lusitana } from 'next/font/google';

/* La police est exportée por être utilisée en JavaScript en tant que variable,
en choisissant uniquement le sous-ensemble de caractères latins. */
export const inter = Inter({
  subsets: ['latin'],
});
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});

/* Elle est appliquée comme une classe de la maniêre suivante:

<body className={`${inter.className}`}>{children}</body>

*/
