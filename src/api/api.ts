import { createClient } from "@supabase/supabase-js";
import { setUserSession } from "../pages/common/session";
import { AcademicsTypes } from "../pages/types/academics";
import { ProgrammesTypes } from "../pages/types/programmes";
import { StaffTypes } from "../pages/types/staff";

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL + '', process.env.REACT_APP_SUPABASE_KEY + '');

// Authenticate user
const authenticateUser = async (username: string, password: string) => {
    const resp = await supabase.from('users').select('username, full_names').eq('username', username).eq('password', password);
    if (resp.status === 200) {
        // Set local Storage
        if (resp.data && resp.data?.length > 0) {
            const data = {
                "userType": "1",
                "username": resp.data[0].username,
                "fullNames": resp.data[0].full_names
            }
            setUserSession(data);
            return true;
        }
        return false;
    }
    return false;
}

const addUser = async () => {
    return await supabase.from('users').insert([{ username: "", password: "" }]);
}

// Academics
// Add
const addAcademics = async (data: AcademicsTypes) => {
    const resp = await supabase.from('academics').insert([data]);
    if (resp.status === 201) {
        return true;
    }
    return false
}

// Fetch
const fetchAcademics = async () => {
    const resp = await supabase.from('academics').select();
    if (resp.status === 200) {
        return resp.data as Array<AcademicsTypes>;
    }
    return [];
}

// Payment Methods
const fetchPaymentMethods = async () => {
    return await supabase.from('payment_methods').select();
}

// Programmes
// Add
const addProgramme = async (data: ProgrammesTypes) => {
    const resp = await supabase.from('programmes').insert([data]);
    if (resp.status === 201) {
        return true;
    }
    return false
}

// Fetch
const fetchProgrammes = async () => {
    const resp = await supabase.from('programmes').select();
    if (resp.status === 200) {
        return resp.data as Array<ProgrammesTypes>;
    }
    return [];
}

// Staff
// Add
const addStaff = async (data: StaffTypes) => {
    const resp = await supabase.from('staff').insert([data]);
    if (resp.status === 201) {
        return true;
    }
    return false
}

// Fetch
const fetchStaff = async () => {
    const resp = await supabase.from('staff').select();
    if (resp.status === 200) {
        return resp.data as Array<StaffTypes>;
    }
    return [];
}

export { authenticateUser, addUser, addAcademics, fetchAcademics, fetchPaymentMethods, addProgramme, fetchProgrammes, addStaff, fetchStaff }