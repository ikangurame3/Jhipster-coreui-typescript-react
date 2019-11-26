import React from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Badge,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

// TODO: add logic to the component

const Users = () => {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" lg="12">
          <Card>
            <CardHeader>Usuarios</CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Fecha registro</th>
                    <th>Rol</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Richard Muñoz</td>
                    <td>2019/01/01</td>
                    <td>Admin</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>John Arias</td>
                    <td>2019/02/01</td>
                    <td>Developer</td>
                    <td>
                      <Badge color="danger">Banned</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Lucho</td>
                    <td>2019/02/01</td>
                    <td>Developer</td>
                    <td>
                      <Badge color="secondary">Inactive</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Ariel Muñoz</td>
                    <td>2019/03/01</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="warning">Pending</Badge>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Pagination>
                <PaginationItem disabled>
                  <PaginationLink previous href="#">
                    Prev
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink next href="#">
                    Next
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Users;
