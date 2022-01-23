import React from 'react';

import { InputOldPassword,GroupForm,Label, FormContainer,
         PrincipalContainer,InputNewPassword,InputConfirmPassword
        } from './StyledAccount';




 function Account() {

     return( <>
                    
                    
        <PrincipalContainer>

<FormContainer>
    
    <h2> Account </h2>
    <h5> Change password </h5>

 <GroupForm>
       <Label>Old password</Label>
       <div>
         <InputOldPassword/> 
       </div>
       <div class="invalid-feedback">Example invalid custom select feedback</div>
  </GroupForm>

  <GroupForm>
       <Label>New password</Label>
     <div>
       <InputNewPassword/> 
     </div>
  </GroupForm>

  <GroupForm>
       <Label>Confirm Password</Label>
       <div>
         <InputConfirmPassword/> 
       </div>
       <div class="invalid-feedback">Example invalid custom select feedback</div>
  </GroupForm>

</FormContainer>     
</PrincipalContainer>
  

            </>
         
    );}

    export default Account