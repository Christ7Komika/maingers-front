import "./breakcomb.css";
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

interface Props {
  data: {
    name: string;
    url: string;
  }[];
}

const BreakComb = ({ data }: Props) => {
  const location = useLocation();
  const currentUrl = (url: string) => {
    if (location.pathname === url) return "breakcomb__link selected";
    return "breakcomb__link";
  };
  return (
    <div className="breakcomb">
      {data.map((url, id) => (
        <Link
          to={url.url}
          key={"breakcomb-" + id}
          className={currentUrl(url.url)}
        >
          {url.name}
          <span>
            <FaChevronRight />
          </span>
        </Link>
      ))}
    </div>
  );
};

export default BreakComb;
