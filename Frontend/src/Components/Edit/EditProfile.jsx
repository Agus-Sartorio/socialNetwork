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



      const [input, setInput] = useState({
        name: 'Dufainder Bedoya',
        description: 'Soy un monstruprogramando',
        imageprofile: './perfil2.jpg', 
        imageport: './BReact.png',
        rol: '',
        cohorte: 'FT-19b',
        
    })

       let imageport= input.imageport;
       console.log(typeof imageport)

     return( <>
                    
                    <PrincipalContainer>
            
            <PortadaContainer onMouseEnter={()=>setEdit(true)} onMouseOut={()=>setEdit(false)} onClick={update2}>
              <ImagePortada src={require(`${input.imageport}`)} />
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
           <InputName></InputName> 
         </div>
         
    </GroupForm>

    <GroupForm>
         <LabelName>Description:</LabelName>
       <div>
         <InputDescription></InputDescription> 
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
           <InputCohorte 
             /> 
         </div>
       </GroupForm>
     </div>    

   </DownContainer>

  </FormContainer>
 </PrincipalContainer>

            </>
         
    );}

    export default EditProfile