import { createClient } from "@supabase/supabase-js";

const supabase = createClient('', '');

// Autheticate user
const autheticateUser = async () => {
   // await supabase.auth();
}

// Academics
const fetchAcademics = async () => {
    return await supabase.from('academics').select();
}

// Homepage

// Payment Methods
const fetchPaymentMethods = async () => {
    return await supabase.from('payment_methods').select();
}

// Programmes
const fetchProgrammes = async () => {
    return await supabase.from('programmes').select();
}