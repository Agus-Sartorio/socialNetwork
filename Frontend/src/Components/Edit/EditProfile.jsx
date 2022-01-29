import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { postUploadProfile } from "../../actions";



import {
  GroupForm, InputName, LabelName,
  InputDescription, SelectRol,
  OptionRol, PrincipalContainer,
  ImageProfile, ImagePortada, FormContainer, DownContainer,
  InputFile, FileContainer, LabelFile, FileContainerP,
  ButtonSubmit, DivSubmitContainer, InputEmail, InputBirthday, H2,
} from './Styled';

import { GlobalStyle } from './Styled';



function EditProfile({ userk }) {


  // const dispatch = useDispatch();

  const [input, setInput] = useState({
    //  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiBf9NIb94QLztGC6JuQk3-FNCrCY1ry64GA&usqp=CAU"
    // "https://images.ole.com.ar/2022/01/01/smOuc4YsP_340x340__1.jpg"  
    // `${process.env.REACT_APP_PUERTO}
    // `${process.env.REACT_APP_PUERTO}uploads/ESiDsykaitaH1weBOslWLJs0TLJ2_profile.jpg`

    fullname: userk.data[0].fullname,
    description: userk.data[0].description,
    background_picture: `./BReact.png`,
    nacionalidad: userk.data[0].nacionalidad,
    email: userk.data[0].email,
    birthday: userk.data[0].birthday
  });
  console.log(input)
  
  const [image, setImage] = useState({ preview: '', data: '' });
  const [imageP, setImageP] = useState({ preview: '', data: '' });
  const [, setEditP] = useState(false);
  const [, setEdit] = useState(false);
  const [OptionUpProfile, setOptionUpProfile] = useState(false);
  const [OptionUpPort, setOptionUpPort] = useState(false);


  const update = () => {
    setOptionUpProfile(previousState => {
      return { ...previousState, OptionUpProfile: !OptionUpProfile }
    });
  }

  const update2 = () => {
    setOptionUpPort(previousState => {
      return { ...previousState, OptionUpPort: !OptionUpPort }
    });
  }



  function handleChange(evt) {
    let mirar = evt.target.value;
    console.log(mirar, "change")
    setInput({
      ...input,
      [evt.target.name]: evt.target.value
    })
  }

  // function handleChangeImg(evt) {
  //   let mirar = evt.target.value;
  //   let valor = evt.target.value;
  //   console.log(mirar, "changeimage")
  //   setInput({
  //     ...input,
  //     [evt.target.name]: valor
  //   })
  // }

  // const fileOnChange = (evt) =>  {
  //   let valor = evt.target.files[0];
  //   let formData = new FormData()
  //   formData.append('input.profile', valor)
  //   // let valor = evt.target.value;
  //   console.log(formData,"ruta imagen")
  //   setInput({
  //     ...input,
  //     [evt.target.name]: formData
  //   })
  // }


  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    if(e.target.name ==='background_picture'){
      userk.data[0].background_picture=img.preview;
      setImageP(img)
    }
    else{
      userk.data[0].profile=img.preview;
      setImage(img)
    }

  }

  async function handleSubmit(evt) {

    evt.preventDefault()
    let formData = new FormData()
    if(image.data !== ""){    
      formData.append('profile', image.data)
      const response = await fetch('http://localhost:3001/usuarios', {
        method: 'PUT',
        body: formData,
        headers: {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IldscHFGVGtsTjFUQUx4SHBWRWE2SDc1VTVWRjIiLCJpYXQiOjE2NDMzODc4MDEsImV4cCI6MTY0MzQ3NDIwMX0.ndZkdPFoQSlblU9bduvSqOYEjHiiEXu7CD9t54Z2XKA", //Agregado
        }
      });

    if (response) {console.log(response.statusText)}
    }
    if(imageP.data !== ""){    
      formData.append('background_picture', imageP.data)
      const response = await fetch('http://localhost:3001/usuarios', {
        method: 'PUT',
        body: formData,
        headers: {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IldscHFGVGtsTjFUQUx4SHBWRWE2SDc1VTVWRjIiLCJpYXQiOjE2NDMzODc4MDEsImV4cCI6MTY0MzQ3NDIwMX0.ndZkdPFoQSlblU9bduvSqOYEjHiiEXu7CD9t54Z2XKA", //Agregado
        }
      })

      if (response) {console.log(response.statusText)}
    }


    // console.log(formData, "lo que estoy mandando")
    // dispatch(postUploadProfile(formData))
  }
  if(userk.data[0].background_picture===''){
     userk.data[0].background_picture='';
  }

  return (<>
    <GlobalStyle />
    <PrincipalContainer>
      <form onSubmit={(evt) => handleSubmit(evt)}>
        {/* `${input.imageport}` */}
        <div>
          <ImagePortada onMouseEnter={() => setEdit(true)} onMouseOut={() => setEdit(false)} onClick={update2} src={`${userk.data[0].background_picture}`} />

          {/* <div>
              {edit? <LabelImgPort onMouseEnter={()=>setEdit(true)} onMouseOut={()=>setEdit(false)} onClick={update2}>Edit</LabelImgPort> : <></>} 
          </div> */}

          {OptionUpPort ?
            <FileContainerP>
              <LabelFile> Uploud to photo
                <InputFile
                  name='background_picture'
                  onChange={evt => handleFileChange(evt)} 
                  multiple/>
              </LabelFile>
            </FileContainerP>


            : <></>}
        </div>



        <div>

          <ImageProfile src={`${userk.data[0].profile}`} onMouseEnter={() => setEditP(true)} onMouseOut={() => setEditP(false)} onClick={update} />

        </div>

        {/* <div>
                 {editP? <LabelImgProfile onMouseEnter={()=>setEditP(true)} onMouseOut={()=>setEditP(false)} onClick={update} >Edit</LabelImgProfile> : <></>}
               </div> */}
        {OptionUpProfile ?
          <FileContainer>
            <LabelFile> Uploud to photo
              <InputFile
                name='profile'
                onChange={evt=>handleFileChange(evt)}
                multiple/>
            </LabelFile>
          </FileContainer>


          : <></>}



        <H2> Edit Profile </H2>

        <FormContainer>
          <div>


            <GroupForm>

              <LabelName>Name:</LabelName>

              <div>
                <InputName
                  value={input.fullname}
                  name='fullname'
                  onChange={evt => handleChange(evt)} />
              </div>






            </GroupForm>

            <GroupForm>
              <LabelName>Description:</LabelName>


              <div>
                <InputDescription
                  value={`${input.description}`}
                  name='description'
                  onChange={evt => handleChange(evt)} />
              </div>

            </GroupForm>

          </div>

          <DownContainer>

            <div>
              {/* value={`${input.nacionalidad}`} */}
              <GroupForm>
                <LabelName>Nacionalidad:</LabelName>
                <div>
                  <SelectRol
                    name='nacionalidad'
                    value={`${input.nacionalidad}`}
                    onChange={evt => handleChange(evt)}
                  >

                    <OptionRol>Argentina</OptionRol>
                    <OptionRol> Bolivia</OptionRol>
                    <OptionRol> Brasil</OptionRol>
                    <OptionRol> Chile</OptionRol>
                    <OptionRol> Colombia</OptionRol>
                    <OptionRol> Costa Rica </OptionRol>
                    <OptionRol> Cuba</OptionRol>
                    <OptionRol> Ecuador</OptionRol>
                    <OptionRol> El Salvador</OptionRol>
                    <OptionRol> Guatemala</OptionRol>
                    <OptionRol> Haití </OptionRol>
                    <OptionRol> Honduras</OptionRol>
                    <OptionRol> Jamaica</OptionRol>
                    <OptionRol> México</OptionRol>
                    <OptionRol> Nicaragua</OptionRol>
                    <OptionRol> Paraguay</OptionRol>
                    <OptionRol> Panamá</OptionRol>
                    <OptionRol> Perú</OptionRol>
                    <OptionRol> Puerto Rico</OptionRol>
                    <OptionRol> República Dominicana</OptionRol>
                    <OptionRol> Uruguay</OptionRol>
                    <OptionRol> Venezuela</OptionRol>


                  </SelectRol>
                </div>
              </GroupForm>
            </div>


            <GroupForm>
              <LabelName>Birthday:</LabelName>
              <div>
                <InputBirthday
                  value={`${input.birthday}`}
                  name='birthday'
                  onChange={evt => handleChange(evt)} />

              </div>
            </GroupForm>



            <div>

              <GroupForm>
                <LabelName>Email:</LabelName>
                <div>
                  <InputEmail
                    value={`${input.email}`}
                    name='email'
                    onChange={evt => handleChange(evt)} />

                </div>
              </GroupForm>
            </div>
          </DownContainer>

        </FormContainer>
        <DivSubmitContainer>
          {(input.fullname !== '') ?

            <ButtonSubmit type='submit'>Guardar</ButtonSubmit>
            : <span>username is require</span>

          }
        </DivSubmitContainer>



      </form>
    </PrincipalContainer>

  </>

  );
}

export default EditProfile