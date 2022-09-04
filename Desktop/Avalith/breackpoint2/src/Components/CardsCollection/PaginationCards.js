const PaginationCards = ({ prev, next, onBack, onNext }) => {
  const clickNext = () => {
    onNext();
  };

  const clickBack = () => {
    onBack();
  };
  return (
    <nav>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={clickBack}>
              Previous
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={clickNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default PaginationCards;
