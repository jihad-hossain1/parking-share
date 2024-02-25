
import Modal from './Modal';
import { useForm } from 'react-hook-form';

const AddSpotModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add New Spot">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label> <br />
                <input className='w-full' {...register("firstName")} />
                <input type="submit" />
            </form>
        </Modal>
    );
};

export default AddSpotModal;