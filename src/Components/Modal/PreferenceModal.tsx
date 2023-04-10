import React, { useState  }  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { SourceArrays, SearchCategories } from '../../constants/array';


function ModalData(props) {
  const [source, setSource] = useState<any[]>([]);
  const [category, setCategory] = useState<any[]>([]);
  const clickSourceHandler = (e, item) =>{
    if (e.target.checked) {
      setSource([
        ...source,
        {
          type:'source',
          name:item.id,
        },
      ]);
    } else {

      const newSource = source.filter((list) => list.name !== item.id);
      setSource(newSource);
    }
  };
  const clickCategoryHandler = (e, item) =>{
    if (e.target.checked) {
      setCategory([
        ...category,
        {
          type:'category',
          name:item,
        },
      ]);
    } else {

      const newCategory = category.filter((list) => list.name !== item);
      setCategory(newCategory);
    }
  };
  const savePreference = () => {
    if (!props.loading) {
      const payload = [...category, ...source];
      console.log(payload);
      props.addUserPerefernce(payload)// personlize news feed accepts array of data
        .then(res => {
          console.log('user perference added', res);
          props.setPreferenceModal(false);
        })
        .catch(err => {
          console.log(err.payload.response?.data.message);
        });
    }
  };
  return (
    <Modal
      show={props.preferenceModal}
      onHide={() => props.setPreferenceModal(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton  className="tag-blue text-center">
        <Modal.Title id="contained-modal-title-vcenter">
          Personalize your news feed
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="border-b-2 border-solid border-solid mb-4">
        <h4>Category</h4>
        {SearchCategories.slice(1).map((item, index)=>(
            <Form.Check
                  key={index}
                  inline
                  label={item}
                  onClick={(e) => clickCategoryHandler(e, item)}
                  name="group1"
                  type='checkbox'
                  id={item}
                />
        ))}
        </div>
        <div className="border-b-2 border-solid border-solid mb-4">
        <h4>Source</h4>
          {SourceArrays.map((item, index)=>(
            <Form.Check
                  key={index}
                  inline
                  label={item.name}
                  onClick={(e) => clickSourceHandler(e, item)}
                  name="group1"
                  type='checkbox'
                  id={item.id}
                />
          ))}
        </div>
        <div>
        <h4>Author</h4>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={savePreference}>Save</Button>
        <Button onClick={() => props.setPreferenceModal(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const PreferenceModal = ({ preferenceModal, addUserPerefernce, loading, setPreferenceModal }:any) => {

  return (
    <>
      <ModalData
        preferenceModal={preferenceModal}
        addUserPerefernce={addUserPerefernce}
        loading={loading}
        setPreferenceModal={setPreferenceModal}
      />
    </>
  );
};

export default PreferenceModal;