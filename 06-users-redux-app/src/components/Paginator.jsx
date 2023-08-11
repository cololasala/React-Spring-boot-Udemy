import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Paginator = ({ url, paginator }) => {
    return (
        <>
            {
                paginator.totalPages > 1 &&  /* si el total de paginas es mayor a 1 muestra el paginador */
                <ul className="pagination">

                    <li className={paginator.first ? "page-item disabled" : "page-item"}>
                        <Link className="page-link" to={`${url}/0`}>
                            First
                        </Link>
                    </li>

                    <li className={paginator.number !== 0 ? "page-item" : "page-item disabled"}>
                        <Link className="page-link" to={`${url}/${paginator.number - 1}`}>
                            Previous
                        </Link>
                    </li>

                    {/*  paginator.totalPages - 1, es la ultima pagina ya que si son 4 paginas, va de 0 a 3  */}
                    <li className={paginator.number < paginator.totalPages - 1 ? "page-item" : "page-item disabled"}>
                        <Link className="page-link" to={`${url}/${paginator.number + 1}`}>
                            Next
                        </Link>
                    </li>

                    <li className={paginator.last ? "page-item disabled" : "page-item"}>
                        <Link className="page-link" to={`${url}/${paginator.totalPages - 1}`}>
                            Last
                        </Link>
                    </li>
                </ul>
            }
        </>
    )
}
