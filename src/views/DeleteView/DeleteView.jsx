import Modal from '../../components/Modal';

function DeleteView({ onClose, onConfirm, showModal, adToDelete }) {
  return (
    <Modal title="Delete confirmation" onClose={onClose} onConfirm={onConfirm} show={showModal}>
      <p>Do you really want to delete the {adToDelete?.headline} ad?</p>
    </Modal>
  );
}

export default DeleteView;
