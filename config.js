/* Konfigurasi backend opsional. Jangan pernah menaruh service_role key di frontend. */
window.APP_CONFIG = {
  demoPin: "246810",
  supabaseUrl: "",
  supabaseAnonKey: "",
  // Aktifkan hanya setelah membuat tabel dan aturan RLS di supabase/schema.sql.
  enableSupabase: false
};