// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";

// function Forma() {
//   return (
//     <>
//       <InputGroup className="mb-3">
//         <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
//         <Form.Control
//           placeholder="Username"
//           aria-label="Username"
//           aria-describedby="basic-addon1"
//         />
//       </InputGroup>

//       <InputGroup className="mb-3">
//         <Form.Control
//           placeholder="Recipient's username"
//           aria-label="Recipient's username"
//           aria-describedby="basic-addon2"
//         />
//         <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
//       </InputGroup>

//       <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
//       <InputGroup className="mb-3">
//         <InputGroup.Text id="basic-addon3">
//           https://example.com/users/
//         </InputGroup.Text>
//         <Form.Control id="basic-url" aria-describedby="basic-addon3" />
//       </InputGroup>

//       <InputGroup className="mb-3">
//         <InputGroup.Text>$</InputGroup.Text>
//         <Form.Control aria-label="Amount (to the nearest dollar)" />
//         <InputGroup.Text>.00</InputGroup.Text>
//       </InputGroup>

//       <InputGroup>
//         <InputGroup.Text>With textarea</InputGroup.Text>
//         <Form.Control as="textarea" aria-label="With textarea" />
//       </InputGroup>
//     </>
//   );
// }

// export default Forma;

// import React, { useState } from 'react';
// import {
//   MDBValidation,
//   MDBValidationItem,
//   MDBInput,
//   MDBBtn,
//   MDBCheckbox
// } from 'mdb-react-ui-kit';

// export default function App() {
//   const [formValue, setFormValue] = useState({
//     fname: 'Mark',
//     lname: 'Otto',
//     email: '',
//     city: '',
//     state: '',
//     zip: '',
//   });

//   const onChange = (e: any) => {
//     setFormValue({ ...formValue, [e.target.name]: e.target.value });
//   };

//   return (
//     <MDBValidation className='row g-3'>
//       <MDBValidationItem className='col-md-4'>
//         <MDBInput
//           value={formValue.fname}
//           name='fname'
//           onChange={onChange}
//           id='validationCustom01'
//           required
//           label='First name'
//         />
//       </MDBValidationItem>
//       <MDBValidationItem className='col-md-4'>
//         <MDBInput
//           value={formValue.lname}
//           name='lname'
//           onChange={onChange}
//           id='validationCustom02'
//           required
//           label='Last name'
//         />
//       </MDBValidationItem>
//       <MDBValidationItem feedback='Please choose a username.' invalid className='col-md-4'>
//         <MDBInputGroup textBefore='@'>
//           <input
//             type='text'
//             className='form-control'
//             id='validationCustomUsername'
//             placeholder='Username'
//             required
//           />
//         </MDBInputGroup>
//       </MDBValidationItem>
//       <MDBValidationItem className='col-md-6' feedback='Please provide a valid city.' invalid>
//         <MDBInput
//           value={formValue.city}
//           name='city'
//           onChange={onChange}
//           id='validationCustom03'
//           required
//           label='City'
//         />
//       </MDBValidationItem>
//       <MDBValidationItem className='col-md-6' feedback='Please provide a valid zip.' invalid>
//         <MDBInput
//           value={formValue.zip}
//           name='zip'
//           onChange={onChange}
//           id='validationCustom05'
//           required
//           label='Zip'
//         />
//       </MDBValidationItem>
//       <MDBValidationItem className='col-12' feedback='You must agree before submitting.' invalid>
//         <MDBCheckbox label='Agree to terms and conditions' id='invalidCheck' required />
//       </MDBValidationItem>
//       <div className='col-12'>
//         <MDBBtn type='submit'>Submit form</MDBBtn>
//         <MDBBtn type='reset'>Reset form</MDBBtn>
//       </div>
//     </MDBValidation>
//   );
// }
import React, { useState } from 'react';
import {
  MDBInput,
  MDBBtn,
  MDBCheckbox,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function App() {
  const [formValue, setFormValue] = useState({
    fname: 'Mark',
    lname: 'Otto',
    email: '',
    city: '',
    state: '',
    zip: '',
  });

  const onChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <MDBRow tag="form" className='g-3'>
      <MDBCol md="4">
        <MDBInput
          value={formValue.fname}
          name='fname'
          onChange={onChange}
          id='validationCustom01'
          required
          label='First name'
        />
      </MDBCol>
      <MDBCol md="4">
        <MDBInput
          value={formValue.lname}
          name='lname'
          onChange={onChange}
          id='validationCustom02'
          required
          label='Last name'
        />
      </MDBCol>
      <MDBCol md="4">
        <div className='input-group has-validation'>
          <span className='input-group-text' id='inputGroupPrepend'>
            @
          </span>
          <input
            type='text'
            className='form-control'
            id='validationCustomUsername'
            placeholder='Username'
            required
          />
          <div className='invalid-feedback'>Please choose a username.</div>
        </div>
      </MDBCol>
      <MDBCol md="6">
        <MDBInput
          value={formValue.city}
          name='city'
          onChange={onChange}
          id='validationCustom03'
          required
          label='City'
        />
      </MDBCol>
      <MDBCol md="6">
        <MDBInput
          value={formValue.zip}
          name='zip'
          onChange={onChange}
          id='validationCustom05'
          required
          label='Zip'
        />
      </MDBCol>
      <MDBCol size="12">
        <MDBCheckbox label='Agree to terms and conditions' id='invalidCheck2' required />
      </MDBCol>
      <MDBCol size="12">
        <MDBBtn type='submit'>Submit form</MDBBtn>
      </MDBCol>
    </MDBRow>
  );
}