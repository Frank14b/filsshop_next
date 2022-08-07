import { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Wrapper, Status } from "@googlemaps/react-wrapper";


export function ModalPositionComponent({ show, handleClose }) {

    const ref = useRef(null);
    const [map, setMap] = useState();

    useEffect(() => {
        if (ref.current && !map) {
          setMap(new window.google.maps.Map(ref.current, {}));
        }
      }, [ref, map]);

    return (
        <>
            <Modal
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose} className={"modal-position"}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose your default location</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save my location
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}