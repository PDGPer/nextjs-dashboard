/ Static Rendering

Por norma, o Next.js faz prerender das rotas, aka Static Rendering.

Isto significa que não há rerenders em caso dos dados mudarem.


/ Parallel Data Fetching

Para evitar que cada fetch tenha de esperar pelo anterior concluir para ser
executado, podem ser wrapped nas funções Promise.all() ou Promise.allSettled()
nativas do JS.

/ loading.tsx

Baseado no Suspense do React, mostra um UI alternativo enquanto espera pelo fim
do carregamento (estilo um Skeleton).


/ (overview)

Pastas em parênteses podem ser usadas para organizar conteúdos sem gerar novas
rotas.