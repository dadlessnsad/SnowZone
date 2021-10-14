import React from "react"
import Layout from "../components/layout";

const MyCharacter = () => {
    return(
    <Layout>
        <div className="mycharacter__page">
            <div className="mycharacter__page__gradient">
                <div className="mycharacter__header">
                    <h1 className="mycharacter__title">
                        My Penguins
                    </h1>
                    <div className="mycharacter_tabs_wrapper">
                        <div className="tabs">
                            <ul className="tab__items">
                                <li class="active"  aria-hidden="true">The Snow Zone NFTs</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mycharacter__body">
                <div className="tab_saved_nfts">
                    <div className="tabs_wallet">
                    <div className="snowzone_NFTs">
                        <div className="snowzone_filter">
                            <div className="snowzone_filter_label">
                                <span>Filter</span>
                            </div>
                            <div className="snowzone_dropdown">
                                <span className="selected_snowzone_item">All Characters</span>
                            </div>
                        </div>
                        <div className="snowzone_search_by_name">
                            <div className="snowzone_search_by_name_label">
                                <span>Search by Name</span>
                            </div>
                            <div className="search_name_by_input">
                                <input type="text" placeholder="Start typing" value=""></input>
                            </div>
                        </div>
                    </div>
                    <div className="nfts_list">
                    
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    )
}

export default MyCharacter