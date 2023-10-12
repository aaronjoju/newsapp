import axios from 'axios';
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddBtn() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [imgUrl, setImgUrl] = useState("")
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [type, setType] = useState("")
    const [author, setAuthor] = useState("")
    const handleSaveChanges = () => {
        // Create a data object with the form values
        const postData = {
            title: title,
            author: author,
            imgUrl: imgUrl,
            description: desc,
            type: type,
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


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                +
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
                                placeholder="https://encrypted-tbn0.gstatic.com/images"
                                autoFocus
                            />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
              />
            </Form.Group> */}
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" >
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu onChange={(e) => setType(e.target.value)}>
                                <Dropdown.Item onClick={() => setType('Business News')}>Business News</Dropdown.Item>
                                <Dropdown.Item onClick={() => setType('Sports News')}>Sports News</Dropdown.Item>
                                <Dropdown.Item onClick={() => setType('Entertainment News')}>Entertainment News</Dropdown.Item>
                                <Dropdown.Item onClick={() => setType('Politics News')}>Politics News</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setDesc(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}

                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddBtn;