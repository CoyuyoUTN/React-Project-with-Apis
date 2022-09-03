const PaginationCards = () => {
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link">Previous</button>
        </li>
        <li className="page-item">
          <button className="page-link">Next</button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationCards;
