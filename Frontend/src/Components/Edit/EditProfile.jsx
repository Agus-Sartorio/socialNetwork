import {getMyProfile} from "../../actions";
import React,{ useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'

import { GroupForm, InputName, LabelName,
     InputDescription, SelectRol, 
     OptionRol, InputCohorte, PrincipalContainer,
     ImageProfile, ImagePortada, FormContainer, DownContainer,
     LabelImgProfile, LabelImgPort, 
     InputFile,FileContainer, LabelFile,FileContainerP,PortadaContainer,
 } from './Styled';

 import {GlobalStyle} from './Styled';


 
function EditProfile() {
   
  
const user = useSelector((state) => state.myprofile) 
console.log(user);

const [input,setInput] =useState({   

  name: user.name,
  description: user.description,
  imageprofile: user.imageprofile, 
  imageport: user.imageport,
  birthday: user.birthday,
  roll: user.roll,
  cohorte: user.birthday,
  });

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

      // name: `${user.name}`,
      // description:`${user.description}`, 
      // imageprofile: `${user.imageprofile}`, 
      // imageport: `${user.imageport}`,

      
      function handleChange(evt){
        let  valo = evt.target.value;
        console.log(valo)
        setInput({
          ...input,
          [evt.target.name]:evt.target.value
      })
    }
    
    function handleSelect(evt){
      if(!input.includes(evt.target.value)){
        setInput({
          ...input,
          diets: [...input.diets, evt.target.value]
        })
      }
      
    }
    
    
    //   const fileSelector = document.getElementById('file-selector');
    //   function  Fselector(fileSelector){fileSelector.addEventListener('change', (event) => {
      //   const fileList = event.target.files;
      //   console.log(fileList);
      //   });
      // }
      

      
      return( <>
                     <GlobalStyle/> 
                    <PrincipalContainer>
                    {/* `${input.imageport}` */}
            <PortadaContainer onMouseEnter={()=>setEdit(true)} onMouseOut={()=>setEdit(false)} onClick={update2}>
              <ImagePortada src={require(`${input.imageport}`)}/>
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
                 <ImageProfile  src={require(`${input.imageprofile}`)} onMouseEnter={()=>setEditP(true)} onMouseOut={()=>setEditP(false)} onClick={update} />
               </div>

               <div>
                 {editP? <LabelImgProfile onMouseEnter={()=>setEditP(true)} onMouseOut={()=>setEditP(false)} onClick={update} >Edit</LabelImgProfile> : <></>}
               </div>
               {OptionUpProfile?
                 <FileContainer>
                  <LabelFile> Uploud to photo
                     <InputFile
                      name = 'imageprofile' 
                      
                      
                    />
                  </LabelFile>
                 </FileContainer>
                  

         : <></>}
            
          
       

    <FormContainer>
      
      <h2> Edit Profile </h2>

   <GroupForm>
         <LabelName>Name:</LabelName>
          
           <div>
           <InputName 
           value={input.name} 
           name = 'name' 
           onChange = {evt => handleChange(evt)}/>
         </div> 
        
         
        
         
    </GroupForm>

    <GroupForm>
         <LabelName>Description:</LabelName>
       <div>
         <InputDescription 
         value={`${input.description}`}
         name = 'description' 
         onChange = {evt => handleChange(evt)}/>
       </div>
    </GroupForm>


  <DownContainer>
     
     <div>

    <GroupForm>
    <LabelName>Rol:</LabelName>
      <SelectRol 
      name = 'roll' 
      value={`${input.roll}`}
      onChange = {evt => handleChange(evt)}
      >
         <OptionRol>Estudiante</OptionRol>
        
      </SelectRol>
      </GroupForm>
     </div>
     
     <div>

      <GroupForm>
         <LabelName>Birthday:</LabelName>
         <div>
           <InputCohorte 
           value={`${input.cohorte}`}
           name = 'cohorte' 
           onChange = {evt => handleChange(evt)}/>
      
         </div>
       </GroupForm>
     </div>    

   </DownContainer>

  </FormContainer>
 </PrincipalContainer>

            </>
         
    );}

    export default EditProfile