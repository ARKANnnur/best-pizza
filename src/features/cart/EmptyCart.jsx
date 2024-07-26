import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-start space-y-5 py-12">
      <LinkButton
        to="/menu"
        custom="transition-all duration-150 ease-in hover:-translate-x-6 text-secondary2/90 hover:text-secondary2 hover:decoration-secondary2 underline sm:text-2xl text-base"
      >
        &larr; Back to menu
      </LinkButton>

      <p className='text-light'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
