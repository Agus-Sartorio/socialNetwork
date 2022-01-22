import React, {useState} from 'react';

import { GroupForm, InputName, LabelName,
     InputDescription, SelectRol, 
     OptionRol, InputCohorte, PrincipalContainer,
     ImageProfile, ImagePortada, FormContainer, DownContainer,
     LabelImgProfile, LabelImgPort, 
     InputFile,FileContainer, LabelFile,FileContainerP,PortadaContainer,
 } from './Styled';




 function EditProfile() {

    const [editP, setEditP] = useState(false);
    const [edit, setEdit] = useState(false);
    const [OptionUpProfile, setOptionUpProfile] = useState(false);
    const [OptionUpPort, setOptionUpPort] = useState(false);
    
  
      const update = () => {
        setOptionUpProfile(previousState => {
          return { ...previousState, OptionUpProfile:!OptionUpProfile}
        });
      }
  
      const update2 = () => {
        setOptionUpPort(previousState => {
          return { ...previousState, OptionUpPort:!OptionUpPort}
        });
      }

     return( <>
                    
                    <PrincipalContainer>
            
            <PortadaContainer onMouseEnter={()=>setEdit(true)} onMouseOut={()=>setEdit(false)} onClick={update2}>
              <ImagePortada/>
            </PortadaContainer>
              

          <div>
              {edit? <LabelImgPort onMouseEnter={()=>setEdit(true)} onMouseOut={()=>setEdit(false)} onClick={update2}>Edit</LabelImgPort> : <></>} 
          </div>

            {OptionUpPort? 
                 <FileContainerP>
                  <LabelFile> Uploud to photo
                     <InputFile/>
                  </LabelFile>
                 </FileContainerP>
                  

         : <></>}
           
           
             
              <div>
                 <ImageProfile onMouseEnter={()=>setEditP(true)} onMouseOut={()=>setEditP(false)} onClick={update} />
               </div>

               <div>
                 {editP? <LabelImgProfile onMouseEnter={()=>setEditP(true)} onMouseOut={()=>setEditP(false)} onClick={update} >Edit</LabelImgProfile> : <></>}
               </div>
               {OptionUpProfile?
                 <FileContainer>
                  <LabelFile> Uploud to photo
                     <InputFile/>
                  </LabelFile>
                 </FileContainer>
                  

         : <></>}
            
          
       

    <FormContainer>
      
      <h2> Edit Profile </h2>

   <GroupForm>
         <LabelName>Name:</LabelName>
         <div>
           <InputName value="Dufainder Bedoya"></InputName> 
         </div>
         
    </GroupForm>

    <GroupForm>
         <LabelName>Description:</LabelName>
       <div>
         <InputDescription> Soy un monstruo programando o eso creo xD </InputDescription> 
       </div>
    </GroupForm>


  <DownContainer>
     
     <div>

    <GroupForm>
    <LabelName>Rol:</LabelName>
      <SelectRol>
         <OptionRol>Estudiante</OptionRol>
         <OptionRol>Egresado</OptionRol>
         <OptionRol>Instructor</OptionRol>
      </SelectRol>
      </GroupForm>
     </div>
     
     <div>

      <GroupForm>
         <LabelName>Cohorte:</LabelName>
         <div>
           <InputCohorte/> 
         </div>
       </GroupForm>
     </div>    

   </DownContainer>

  </FormContainer>
 </PrincipalContainer>

            </>
         
    );}

    export default EditProfile