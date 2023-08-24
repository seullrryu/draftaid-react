import React from "react";
import Undrafted from "./Undrafted";

function UndraftedAll(props) {
	return (
		<div>
			<div className="aid-title hidden-xs">
				<i className="fa fa-sort-amount-asc"></i> Overall Rankings
			</div>

			<div className="row form-group">
				<div className="w-4/5">
					<input
						type="text"
						className="form-control mr-4 w-1/2"
						placeholder="Search"
						onChange={props.search}
						value={props.query}
					/>
				</div>
			</div>

			<div className="scrollable overall-rankings">
				<Undrafted
					fields={[
						"RK",
						"TIERS",
						"POS",
						"player",
						"TEAM",
						"bye",
						"age",
						"draft_year",
					]}
					players={props.players}
					draft={(p) => props.draft(p)}
				/>
			</div>
		</div>
	);
}

UndraftedAll.propTypes = {
	players: React.PropTypes.array.isRequired,
	query: React.PropTypes.string.isRequired,
	search: React.PropTypes.func.isRequired,
};

export default UndraftedAll;
