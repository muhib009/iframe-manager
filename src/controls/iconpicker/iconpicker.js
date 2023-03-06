/**
 * WordPress dependencies
 */
import { Fragment, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

// import fontAwesomeIcons
import fontAwesomeIcons from "../../helper/icons";

// import styles
import "./iconpicker.scss";

const IconPicker = ({ label, value, attribute, setAttributes }) => {
	const [openIconLib, setOpenIconLib] = useState(false);
	const [search, setSearch] = useState("");
	return (
		<div className="postkit-blocks-iconpicker">
			<label className="label" htmlFor="icon-picker">
				{label}
			</label>
			<div className="icons-libary-wrap" id="icon-picker">
				<div
					className="icon-header"
					role={openIconLib ? "dialog" : "button"}
					onClick={(e) => {
						if (
							e.target.classList.contains("remove-icon") ||
							e.target.classList.contains("fa-times")
						) {
							setAttributes({ [attribute]: "" });
						} else {
							setOpenIconLib(!openIconLib);
						}
					}}
				>
					<div className="icon-select">
						{value ? (
							<Fragment>
								<div className="selected-icon">
									<i className={value} />
								</div>
								<div className="remove-icon">
									<i className="fas fa-times" />
								</div>
							</Fragment>
						) : (
							<div className="selected-icon-txt">
								{__("Select Icon", "postkit-blocks")}
							</div>
						)}
					</div>
					<button
						className="icon-lib-btn"
						onClick={() => setOpenIconLib(!openIconLib)}
					>
						<i className={openIconLib ? "fas fa-times" : "fas fa-angle-down"} />
					</button>
				</div>
				{openIconLib && (
					<div className="icons-libary">
						<div className="icon-search">
							<input
								type="text"
								placeholder="Search.."
								onChange={(e) => setSearch(e.target.value)}
							/>
						</div>
						<div className="icons-libary-grid">
							{search && search.length > 0
								? fontAwesomeIcons
										.filter((icon) => icon.includes(search))
										.map((icon, index) => {
											return (
												<div
													className={
														`icon-single-item ` +
														(value === icon ? "active" : "")
													}
													key={index}
													onClick={() => {
														setAttributes({ [attribute]: icon });
														setOpenIconLib(false);
														setSearch("");
													}}
													role="button"
												>
													<i className={icon} />
												</div>
											);
										})
								: fontAwesomeIcons.map((icon, index) => {
										return (
											<div
												className={
													`icon-single-item ` + (value === icon ? "active" : "")
												}
												key={index}
												onClick={() => {
													setAttributes({ [attribute]: icon });
													setOpenIconLib(false);
													setSearch("");
												}}
												role="button"
											>
												<i className={icon} />
											</div>
										);
								  })}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default IconPicker;
