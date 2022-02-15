import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import "./ProductPage.scss";
import Modal from "./Modal";

export default function ProductPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      navigate(location.state?.from?.pathname || "/");
    }, 100);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <p>Some content, id {location.state}</p>
    </Modal>
  );
}
