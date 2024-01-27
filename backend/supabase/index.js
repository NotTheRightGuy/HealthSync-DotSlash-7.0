const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabase = createClient(process.env.SB_URL, process.env.SB_KEY);

module.exports = supabase;
