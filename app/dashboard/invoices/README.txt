/ useSearchParams() hook vs searchParams prop

<Search> is a client component, so useSearchParams() is used to get the
params from the client.

<Table> is a server component and fetches its own data, so the searchParams
can just be passed to it.