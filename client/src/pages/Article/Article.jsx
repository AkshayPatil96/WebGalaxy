import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from "./article.module.css"

const Article = () => {
  return (
    <div>
       <div className={styles.formDiv}>
        <h3>𝓦𝓻𝓲𝓽𝓮 𝔂𝓸𝓾𝓻 𝓸𝔀𝓷 𝓐𝓻𝓽𝓲𝓬𝓵𝓮 𝓽𝓸 𝓱𝓮𝓵𝓹 𝓸𝓽𝓱𝓮𝓻 𝓼𝓽𝓾𝓭𝓮𝓷𝓽𝓼</h3>
        <br />
       <Form>
       <Form.Group id={styles.formInputs} style={{marginBottom:"16px" }} className="form-group" >
            <FloatingLabel controlId="floatingSelect" label="𝓣𝓮𝓬𝓱𝓢𝓽𝓪𝓬𝓴 𝓒𝓪𝓽𝓮𝓰𝓸𝓻𝔂">
                <Form.Select aria-label="Floating label select example">
                    <option>𝓞𝓹𝓮𝓷 𝓽𝓱𝓲𝓼 𝓼𝓮𝓵𝓮𝓬𝓽 𝓶𝓮𝓷𝓾</option>
                    <option value="1">𝓗𝓣𝓜𝓛</option>
                    <option value="2">𝓒𝓢𝓢</option>
                    <option value="3">𝓙𝓐𝓥𝓐𝓢𝓒𝓡𝓘𝓟𝓣</option>
                </Form.Select>
            </FloatingLabel>
       </Form.Group>

       <Form.Group id={styles.formInputs} style={{marginBottom:"16px"}} className="form-group" >
            <FloatingLabel controlId="floatingSelect" label="𝓟𝓵𝓮𝓪𝓼𝓮 𝓹𝓻𝓸𝓿𝓲𝓭𝓮 𝓽𝓸𝓹𝓲𝓬">
                <Form.Select aria-label="Floating label select example">
                    <option>𝓞𝓹𝓮𝓷 𝓽𝓱𝓲𝓼 𝓼𝓮𝓵𝓮𝓬𝓽 𝓶𝓮𝓷𝓾</option>
                    <option value="1">𝓗𝓣𝓜𝓛</option>
                    <option value="2">𝓒𝓢𝓢</option>
                    <option value="3">𝓙𝓐𝓥𝓐𝓢𝓒𝓡𝓘𝓟𝓣</option>
                </Form.Select>
            </FloatingLabel>
       </Form.Group>

      <Row className="mb-3">
        <Form.Group  as={Col} controlId="formGridEmail">
            <FloatingLabel controlId="floatingInputGrid" label="𝓣𝓲𝓽𝓵𝓮">
            <Form.Control type="string" placeholder="Title" />
            </FloatingLabel>
        </Form.Group>

        <Form.Group  as={Col} controlId="formGridPassword">
          <FloatingLabel controlId="floatingInputGrid" label="𝓢𝓾𝓫𝓽𝓲𝓽𝓵𝓮">
            <Form.Control type="string" placeholder="Subtitle" />
          </FloatingLabel>
        </Form.Group>
      </Row>

      <Form.Group id={styles.formInputs} className="mb-3" controlId="formGridAddress1">
        <FloatingLabel controlId="floatingTextarea2" label="𝓖𝓲𝓿𝓮 𝓫𝓻𝓲𝓮𝓯 𝓭𝓮𝓼𝓬𝓻𝓲𝓹𝓽𝓲𝓸𝓷">
            <Form.Control
            as="textarea"
            placeholder="Give brief description"
            style={{ height: '140px' }}
            />
        </FloatingLabel>
      </Form.Group>

      <Form.Group id={styles.formInputs} controlId="formFileLg" className="mb-3">
        <Form.Label>𝓤𝓹𝓵𝓸𝓪𝓭 𝓲𝓶𝓪𝓰𝓮 𝓯𝓲𝓵𝓮 𝓽𝓸 𝓮𝔁𝓹𝓵𝓪𝓲𝓷 𝓶𝓸𝓻𝓮</Form.Label>
        <Form.Control style={{backgroundColor:'#8ad7e9de',color:'white'}} type="file" size="lg" />
      </Form.Group>

      

      <Form.Group  className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="𝓒𝓱𝓮𝓬𝓴 𝓶𝓮 𝓸𝓾𝓽" />
      </Form.Group>

      <Button className={styles.submitBtn} variant="info" type="submit">
      𝓢𝓾𝓫𝓶𝓲𝓽 𝓐𝓻𝓽𝓲𝓬𝓵𝓮
      </Button>
    </Form>
    </div>
    </div>
  )
}

export default Article