This is how you sync supabase schema

```powershell
$Env:SUPABASE_ACCESS_TOKEN = choose token

npx supabase gen types typescript --project-id xiyugudyegtuixifkvfb --schema public > types/supabase.ts
```
