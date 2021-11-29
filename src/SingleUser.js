import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function SingleUser(props) {
    let { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0)
      });

    return (
        <div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <button onClick={() => window.history.back()} className="btn btn-warning mb-4">Go Back</button>
                        <h3>Single User</h3>
                        <div class="table-responsive">
                        <table class="table mt-2">
                            <tbody>

                                {
                                    props.data.filter(item => id == item.id).map((item, i) =>
                                        <>
                                            <tr>
                                                <th scope="row" width="200">Id</th>
                                                <td>{item.id}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Image</th>
                                                <td><img src={item.avatar_url} width="350" /></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Website URL</th>
                                                <td>{item.html_url}</td>
                                            </tr>

                                        </>
                                    )
                                }

                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                  </div>
        </div>
    )
}

export default SingleUser;

// export default withRouter(SingleUser);

