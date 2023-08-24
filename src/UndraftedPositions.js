import React from "react";

import Undrafted from "./Undrafted";

function UndraftedPositions(props) {
	const fields = ["RK", "TIERS", "POS", "player", "TEAM", "bye", "age", "draft_year"];

	return (
		<div className="w-3/5">
			<div className="aid-title">
				<i className="fa fa-signal"></i> Top Picks By Position
			</div>

			<div className="scrollable positions">
				<span className="col-sm-12 position-title">Runningbacks</span>
				<Undrafted
					fields={fields}
					players={props.players}
					draft={(p) => props.draft(p)}
					// size={15}
					position="RB"
				/>
			</div>

			<div className="scrollable positions">
				<span className="col-sm-12 position-title">Wide Receivers</span>
				<Undrafted
					fields={fields}
					players={props.players}
					draft={(p) => props.draft(p)}
					// size={15}
					position="WR"
				/>
			</div>

			<div className="scrollable positions">
				<span className="col-sm-12 position-title">Quarterbacks</span>
				<Undrafted
					fields={fields}
					players={props.players}
					draft={(p) => props.draft(p)}
					// size={15}
					position="QB"
				/>
			</div>

			<div className="scrollable positions">
				<span className="col-sm-12 position-title">Tightends</span>
				<Undrafted
					fields={fields}
					players={props.players}
					draft={(p) => props.draft(p)}
					// size={15}
					position="TE"
				/>
			</div>
		</div>
	);
}

UndraftedPositions.propTypes = {
	draft: React.PropTypes.func.isRequired,
	players: React.PropTypes.array.isRequired,
};

export default UndraftedPositions;
