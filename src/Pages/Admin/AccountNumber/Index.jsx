import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../hooks/axiosInstance";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Oval } from "react-loader-spinner";

import "./Index.css";
import CreateAccount from "../../../components/Modal/Admin/AccountName/CreateAccount";
import EditAccount from "../../../components/Modal/Admin/AccountName/EditAccount";
import ViewAccount from "../../../components/Modal/Admin/AccountName/ViewAccount";

export default function Index() {
  const MySwal = withReactContent(Swal);
  const [accounts, setAccounts] = useState([]);
  const [filter, setFilter] = useState("");
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [showCreate, setShowCreate] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showView, setShowView] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleShowCreate = () => setShowCreate(true);
  const handleShowEdit = () => setShowEdit(true);
  const handleShowView = () => setShowView(true);

  const handleClose = () => {
    setShowCreate(false);
    setShowEdit(false);
    setShowView(false);
  };

  const handleRefresh = () => {
    setRefreshKey((prevRefreshKey) => prevRefreshKey + 1);
  };

  const handleDelete = async (id) => {
    const result = await MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axiosInstance.delete(`/user/account/delete/${id}`);
        toast.success("Account deleted successfully!");
        handleRefresh();
      } catch (error) {
        console.error("Error deleting account:", error);
        toast.error("Error deleting account.");
      }
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // const handlePageChange = (newPage) => {
  //   if (newPage > 0 && newPage <= pagination.last_page) {
  //     setPage(newPage);
  //   }
  // };

  const setCurrent = (data) => {
    setCurrentAccount(data);
  };

  useEffect(() => {
    const fetchAccounts = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/user/bank_account/get_account`, {
          params: {
            page,
            filter,
          },
        });

        setAccounts(response.data.data.accounts || []);
        console.log(response.data.data.accounts, 88);
        
        // setPagination(response.data.data.accounts);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
      setLoading(false);
    };

    fetchAccounts();
  }, [page, filter, refreshKey]);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0" style={{ color: "#c4281c" }}>
              Account Management
            </h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <Link to="/app">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active" style={{ color: "#c4281c" }}>
                  Manage Account
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {loading && !filter ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
          <Oval height={80} width={80} color="#FF0200" visible={true} ariaLabel="oval-loading" secondaryColor="#4fa94d" strokeWidth={2} strokeWidthSecondary={2} />
        </div>
      ) : null}
      <div className="row" id="accountList">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header d-flex align-items-center border-0">
              <h5 className="card-title mb-0 flex-grow-1" style={{ color: "#c4281b" }}>
                Manage Account
              </h5>
            </div>

            <div className="card-body border border-dashed border-end-0 border-start-0">
              <div className="d-flex justify-content-end">
                <button className="btn" style={{ backgroundColor: "#c4281b", color: "#fff", border: "none" }} onClick={handleShowCreate}>
                  <i className="mdi mdi-plus-circle-outline"></i> Add Account
                </button>
              </div>
              <br />
              <div className="col-xl-4 col-md-6">
                <div className="search-box">
                  <input type="text" className="form-control search" placeholder="Search by account name..." value={filter} onChange={handleFilterChange} />
                  <i className="ri-search-line search-icon"></i>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="col-md-12">
                <div className="table-responsive table-card">
                  <table className="table align-middle table-nowrap table-striped table-borderless table-hover" id="accountTable">
                    <thead className="table-light text-muted">
                      <tr>
                        <th scope="col">#</th>
                        <th>Account Name</th>
                        <th>Account Number</th>
                        <th>Bank</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="list form-check-all">
                      {accounts.map((account, idx) => (
                        <tr key={idx}>
                          <td scope="row">{idx + 1}</td>
                          <td>{account.account_name}</td>
                          <td>{account.account_number}</td>
                          <td>{account.bank}</td>
                          <td>
                            <div className="dropdown">
                              <button className="btn btn-icon btn-sm fs-16 text-muted dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="mdi mdi-apps"></i>
                              </button>
                              <ul className="dropdown-menu">
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    onClick={() => {
                                      handleShowView();
                                      setCurrent(account);
                                    }}
                                  >
                                    <i className="mdi mdi-eye me-2 text-primary"></i> View
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" onClick={() => { handleShowEdit(); setCurrent(account); }}>
                                    <i className="mdi mdi-pencil me-2 text-success"></i> Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" onClick={() => handleDelete(account.id)}>
                                    <i className="mdi mdi-trash-can-outline me-2 text-danger"></i> Delete
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* <div className="d-flex justify-content-end mt-5 mb-5">
                    <div className="pagination-wrap hstack gap-2">
                      <ul className="pagination listjs-pagination mb-0">
                        {(pagination.links || []).map((link, index) => {
                          const pageNumber = link.url ? new URL(link.url).searchParams.get("page") : null;
                          return (
                            <li key={index} className={`page-item ${link.active ? "active" : ""}`}>
                              <button className="page-link" onClick={() => pageNumber && handlePageChange(Number(pageNumber))} dangerouslySetInnerHTML={{ __html: link.label }}></button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <CreateAccount show={showCreate} closeModal={handleClose} refreshPage={handleRefresh} />
        <EditAccount showEdit={showEdit} closeModal={handleClose} refreshPage={handleRefresh} currentAccount={currentAccount} />
        <ViewAccount showView={showView} closeModal={handleClose} refreshPage={handleRefresh} currentAccount={currentAccount} />
      </div>
    </>
  );
}
