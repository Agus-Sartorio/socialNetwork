import {getMyProfile, getUsers, getMyProfileData} from "../../actions";
import React,{ useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {postUploadProfile, getProfile} from "../../actions";



import { GroupForm, InputName, LabelName,
     InputDescription, SelectRol, 
     OptionRol, InputCohorte, PrincipalContainer,
     ImageProfile, ImagePortada, FormContainer, DownContainer,
     LabelImgProfile, LabelImgPort, 
     InputFile,FileContainer, LabelFile,FileContainerP,PortadaContainer,
     ButtonSubmit,DivSubmitContainer
 } from './Styled';

 import {GlobalStyle} from './Styled';
 
 
 
 function EditProfile() {
   
   const userk = useSelector((state) => state.myProfileData)
   console.log(userk);
   const dispatch = useDispatch(); 

const [input,setInput] = useState({   
//  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiBf9NIb94QLztGC6JuQk3-FNCrCY1ry64GA&usqp=CAU"
// "https://images.ole.com.ar/2022/01/01/smOuc4YsP_340x340__1.jpg"  

  fullname: userk[0].fullname,
  description:  userk[0].description,
  profile:  userk[0].profile, 
  background_picture: ['./BReact.png'],
  email: userk[0].email,
  roll: ['Estudiante'],
  cohorte:['FT-19b']
  });
console.log(input)
// if(userk.length > 0 ){
//   var name=userk[0].fullname;
//   var imageprofile=userk[0].profile
  
//   let Inputt = {   
    
//       name: userk[0].fullname,
//       description: 'puta mierda',
//       imageprofile: userk[0].profile, 
//       imageport: './BReact.png',
//       birthday:'15-02-2022',
//       roll: 'Estudiante',
//       cohorte:'FT-19b'
//       };

//   console.log(name)
// }
// const user = useSelector((state) => state.myprofile)
// console.log(userk[0].fullname);
//  console.log(userk[0].fullname);


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
        let mirar = evt.target.value;
        console.log(mirar)
        setInput({
          ...input,
          [evt.target.name]:evt.target.value
      })
    }

    async function handleSubmit(evt){
      evt.preventDefault()
      dispatch(postUploadProfile(input))
  }
    
    // function handleSelect(evt){
    //   if(!input.includes(evt.target.value)){
    //     setInput({
    //       ...input,
    //       diets: [...input.diets, evt.target.value]
    //     })
    //   }
      
    // }
    
    
    //   const fileSelector = document.getElementById('file-selector');
    //   function  Fselector(fileSelector){fileSelector.addEventListener('change', (event) => {
      //   const fileList = event.target.files;
      //   console.log(fileList);
      //   });
      // }
      

      
      return( <>
                     <GlobalStyle/> 
                    <PrincipalContainer>
            <form onSubmit={(evt) => handleSubmit(evt)}>         
                    {/* `${input.imageport}` */}
            <PortadaContainer onMouseEnter={()=>setEdit(true)} onMouseOut={()=>setEdit(false)} onClick={update2}>
              
              <ImagePortada src={require(`${input.background_picture}`)}/>
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
             
               <ImageProfile  src={`${input.profile}`} onMouseEnter={()=>setEditP(true)} onMouseOut={()=>setEditP(false)} onClick={update} /> 
               
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
           value={input.fullname} 
           name = 'fullname' 
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
         <LabelName>Email:</LabelName>
         <div>
           <InputCohorte 
           value={`${input.email}`}
           name = 'email' 
           onChange = {evt => handleChange(evt)}/>
      
         </div>
       </GroupForm>
     </div>    
   </DownContainer>
      
<DivSubmitContainer>  
   {(input.fullname !== '')?
     
         <ButtonSubmit type='submit'>Guardar</ButtonSubmit>
          : <span>username is require</span>
        
  }
</DivSubmitContainer> 



  </FormContainer>
 </form> 
</PrincipalContainer>

            </>
         
    );}

    export default EditProfile