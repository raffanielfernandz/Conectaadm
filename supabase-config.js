window.SUPABASE_URL = "https://hbvrougvpxuwdjsyaqcu.supabase.co";
window.SUPABASE_PUBLISHABLE_KEY = "sb_publishable_AhzPGIgCD351W3sEuzY2KA_YZog8c3a";

// Cliente único por página, com persistência explícita da sessão no navegador.
window.getSupabaseClient = function(){
  if(!window.__conectaSupabaseClient){
    window.__conectaSupabaseClient = window.supabase.createClient(
      window.SUPABASE_URL,
      window.SUPABASE_PUBLISHABLE_KEY,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
          storage: window.localStorage,
          storageKey: "conecta-adm-auth"
        }
      }
    );
  }
  return window.__conectaSupabaseClient;
};
