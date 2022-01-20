import React from 'react';
// import { FormControl, FormLabel } from 'react-bootstrap';
import { GroupForm, InputName, LabelName,GlobalStyle, 
         Container2, InputDescription, SelectRol, 
         OptionRol, InputCohorte } from './StyledEdit';


function Edit() {
    return (
         
    <>
     <Container2>
        <GlobalStyle/>
              <h2> Edit Profile </h2>

           <GroupForm>
                 <LabelName>Name:</LabelName>
                 <div>
                   <InputName/> 
                 </div>
            </GroupForm>

            <GroupForm>
                 <LabelName>Description:</LabelName>
               <div>
                 <InputDescription/> 
               </div>
            </GroupForm>

            <GroupForm>
            <LabelName>Rol:</LabelName>
              <SelectRol>
                 <OptionRol>Estudiante</OptionRol>
                 <OptionRol>Egresado</OptionRol>
                 <OptionRol>Instructor</OptionRol>
              </SelectRol>
             
              <GroupForm>
                 <LabelName>Cohorte:</LabelName>
                 <div>
                   <InputCohorte/> 
                 </div>
            </GroupForm>


            </GroupForm>



         </Container2>
        </>

    );} 

export default Edit;