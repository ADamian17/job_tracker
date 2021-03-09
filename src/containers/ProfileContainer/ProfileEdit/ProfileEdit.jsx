import React, { useState } from 'react';

import Input from '../../../components/Input/Input';

const ProfileEdit = () => {
    
    const [ firstName, setFirstName ] = useState(first_name);
    const [ lastName, setLastName ] = useState(last_name);
    const [ email, setEmail ] = useState(email);
    const [ profession, setProfession ] = useState(last_name);

    return (
        <form>
            <Input 
                type="text" 
                placeholder={firstName}
                label="Company Name" 
                value={firstName} onChange={ (e) => setFirstName(e.target.value) } />

        </form>
    );
};

export default ProfileEdit;
