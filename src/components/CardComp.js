import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function CardComp() {

  const handleSaveChanges = () => {
    // Create a data object with the form values
    const postData = {
        title: title,
        author: author,
        imgUrl: imgUrl,
        description: desc,
        // type: type,
    };
    console.log(postData)
    // Use Axios to send a POST request to your API
    // axios
    //   .post('your_api_endpoint_here', postData)
    //   .then((response) => {
    //     console.log('Post successful:', response);
    //     handleClose(); // Close the modal after a successful post
    //   })
    //   .catch((error) => {
    //     console.error('Error posting data:', error);
    //     // You can handle errors here, e.g., show an error message to the user
    //   });
    handleClose()
};

  const [imgUrl,setImgUrl]=useState("https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2023/10/RTX4BDLW.JPG.webp")
  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")
  const [author,setAuthor]=useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>
      {'      '}
      <Button >
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
              onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Author</Form.Label>
              <Form.Control
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
                type="text"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ImageUrl</Form.Label>
              
              <Form.Control
              onChange={(e) => setImgUrl(e.target.value)}
                type="text"
                value={imgUrl}
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descriptio</Form.Label>
              <Form.Control as="textarea" rows={3} value={desc} onChange={(e) => setDesc(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Card.Body>
    </Card>
  );
}

export default CardComp;