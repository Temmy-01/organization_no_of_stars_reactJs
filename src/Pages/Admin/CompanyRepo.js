import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CompanyIndex() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const reposPerPage = 5;

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = async () => {
    setLoading(true);
    setError("");

    try {
      const repoNames = [
        "facebook/react",
        "vuejs/vue",
        "angular/angular",
        "laravel/laravel",
        "nodejs/node",
        "expressjs/express",
        "nestjs/nest",
        "denoland/deno",
        "microsoft/vscode",
        "torvalds/linux",
      ];

      const response = await fetch(
        `http://localhost:3000/github/repo_info?repoName=${repoNames.join(
          "&repoName="
        )}`
      );

      if (!response.ok) {
        if (response.status === 404)
          throw new Error("Some repositories were not found.");
        throw new Error("repoName parameter is required.");
      }

      const data = await response.json();
      setRepos(data.repos || data);
    } catch (error) {
      console.error("Error fetching repositories:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredRepos = repos.filter((repo) =>
    repo.repoName?.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRepos.length / reposPerPage);
  const startIndex = (page - 1) * reposPerPage;
  const paginatedRepos = filteredRepos.slice(
    startIndex,
    startIndex + reposPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0" style={{ color: "#c4281c" }}>
              Organisation Repositories
            </h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <Link to="/app">Dashboard</Link>
                </li>
                <li
                  className="breadcrumb-item active"
                  style={{ color: "#c4281c" }}
                >
                  Repo List
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="row" id="contactList">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header d-flex align-items-center border-0">
              <h5
                className="card-title mb-0 flex-grow-1"
                style={{ color: "#c4281b" }}
              >
                Organisation Repositories
              </h5>
            </div>

            <div className="card-body border border-dashed border-end-0 border-start-0">
              <div className="col-xl-4 col-md-6">
                <div className="search-box">
                  <input
                    type="text"
                    className="form-control search"
                    placeholder="Search repositories..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  />
                  <i className="ri-search-line search-icon"></i>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="col-md-12">
                <div className="table-responsive table-card">
                  <table className="table align-middle table-nowrap table-striped table-borderless table-hover">
                    <thead className="table-light text-muted">
                      <tr>
                        <th>#</th>
                        <th>Repo Name</th>
                        <th>Description</th>
                        <th>No. of Stars</th>
                      </tr>
                    </thead>
                    <tbody className="list form-check-all">
                      {loading ? (
                        <tr>
                          <td colSpan={4} className="text-center">
                            Loading...
                          </td>
                        </tr>
                      ) : error ? (
                        <tr>
                          <td colSpan={4} className="text-center text-danger">
                            {error}
                          </td>
                        </tr>
                      ) : paginatedRepos.length > 0 ? (
                        paginatedRepos.map((repo, index) => (
                          <tr key={index}>
                            <td>{startIndex + index + 1}</td>
                            <td>{repo.repoName || "N/A"}</td>
                            <td>
                              {repo.description || "No description available"}
                            </td>
                            <td>{repo.stars || 0}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={4} className="text-center">
                            No repositories found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="card-footer text-center">
              <button
                onClick={fetchRepos}
                className="btn btn-primary"
                style={{ backgroundColor: "#c4281b", border: "none" }}
              >
                Refresh Repositories
              </button>

              <div className="d-flex justify-content-end mt-5 mb-5">
                <div className="pagination-wrap hstack gap-2">
                  <ul className="pagination listjs-pagination mb-0">
                    <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(page - 1)}
                      >
                        «
                      </button>
                    </li>

                    {[...Array(totalPages)].map((_, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          page === index + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}

                    <li
                      className={`page-item ${
                        page === totalPages ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(page + 1)}
                      >
                        »
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
