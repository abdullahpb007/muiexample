import React, { Component, Fragment } from "react";
import MaterialTable from "material-table";
import {
  ArrowBack,
  AddBox,
  Check,
  Clear,
  DeleteOutline,
  Edit,
  SaveAlt,
  FilterList,
  FirstPage,
  LastPage,
  ChevronRight,
  ChevronLeft,
  Search,
  ArrowUpward,
  Remove,
  ViewColumn
} from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import { KeyboardDatePicker } from "@material-ui/pickers";

class MuiTableExample extends Component {
  state = {
    columns: [
      {
        title: "Custom col",
        field: "imageUrl",
        filtering: false,
        cellStyle: {
          backgroundColor: "#039be5",
          color: "#FFF"
        },
        render: rowData => (
          <img
            src={rowData.imageUrl}
            style={{ width: 40, borderRadius: "50%" }}
          />
        )
      },
      {
        title: "Name",
        field: "name",
        editComponent: props => (
          <TextField
            id="outlined-name"
            label="Name"
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
            margin="normal"
            variant="outlined"
          />
        )
      },
      { title: "Surname", field: "surname" },
      {
        title: "DOB",
        field: "dob",
        editComponent: props => (
          <KeyboardDatePicker
            autoOk
            placeholder="MM/dd/yyyy"
            value={props.value}
            onChange={date => props.onChange(date)}
            format="dd/MM/yyyy"
          />
        )
      },
      {
        title: "Birth Place",
        field: "birthCity",
        lookup: { 34: "Chennai", 63: "Salem" }
      }
    ],
    data: [
      {
        imageUrl: "http://wizarainfotech.com/images/icon011.png",
        name: "Malik",
        surname: "Mical",
        dob: "02/02/2019",
        birthCity: 63
      },
      {
        imageUrl: "http://wizarainfotech.com/images/icon011.png",
        name: "Zain",
        surname: "Mahib",
        dob: "02/03/2019",
        birthCity: 34
      },
      {
        imageUrl: "http://wizarainfotech.com/images/icon011.png",
        name: "Afred",
        surname: "Kalku",
        dob: "02/02/2019",
        birthCity: 63
      },
      {
        imageUrl: "http://wizarainfotech.com/images/icon011.png",
        name: "Alsa",
        surname: "Dhohi",
        dob: "02/02/2019",
        birthCity: 63
      }
    ]
  };

  render() {
    return (
      <Fragment>
        <MaterialTable
          title="Editable Preview"
          columns={this.state.columns}
          data={this.state.data}
          icons={{
            Add: ArrowBack,
            Add: AddBox,
            Check: Check,
            Clear: Clear,
            Delete: DeleteOutline,
            DetailPanel: ChevronRight,
            Edit: Edit,
            Export: SaveAlt,
            Filter: FilterList,
            FirstPage: FirstPage,
            LastPage: LastPage,
            NextPage: ChevronRight,
            PreviousPage: ChevronLeft,
            ResetSearch: Clear,
            Search: Search,
            SortArrow: ArrowUpward,
            ThirdStateCheck: Remove,
            ViewColumn: ViewColumn
          }}
          options={{
            filtering: true,
            exportButton: true,
            exportExcel: (columns, data) => {
              alert(
                "You should develop a code to export " + data.length + " rows"
              );
            }
          }}
          detailPanel={[
            {
              tooltip: "Show Name",
              render: rowData => {
                return (
                  <div
                    style={{
                      fontSize: 100,
                      textAlign: "center",
                      color: "white",
                      backgroundColor: "#43A047"
                    }}
                  >
                    {rowData.name}
                  </div>
                );
              }
            }
          ]}
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    const data = this.state.data;
                    data.push(newData);
                    this.setState({ data }, () => resolve());
                  }
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    const data = this.state.data;
                    const index = data.indexOf(oldData);
                    data[index] = newData;
                    this.setState({ data }, () => resolve());
                  }
                  resolve();
                }, 1000);
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    let data = this.state.data;
                    const index = data.indexOf(oldData);
                    data.splice(index, 1);
                    this.setState({ data }, () => resolve());
                  }
                  resolve();
                }, 1000);
              })
          }}
        />
      </Fragment>
    );
  }
}

export default MuiTableExample;
