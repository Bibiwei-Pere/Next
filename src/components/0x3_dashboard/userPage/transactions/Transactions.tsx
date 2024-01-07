import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./Transactions.scss";

interface Props {
	columns: GridColDef[];
	rows: object[];
}

const Transactions = ({ columns, rows }: Props) => {
	return (
		<div className="transactions">
			<h4>Transactions</h4>
			<DataGrid
				className="dataGrid"
				sx={{
					"& .MuiDataGrid-cell:hover": {
						color: "#f3603c",
					},
				}}
				rows={rows}
				columns={[...columns]}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				slots={{ toolbar: GridToolbar }}
				slotProps={{ toolbar: { showQuickFilter: true, quickFilterProps: { debounceMs: 500 } } }}
				pageSizeOptions={[5]}
				disableRowSelectionOnClick
				disableColumnFilter
				disableColumnSelector
				disableDensitySelector
			/>
		</div>
	);
};

export default Transactions;
