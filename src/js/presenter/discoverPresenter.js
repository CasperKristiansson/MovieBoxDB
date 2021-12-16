import React from 'react';
import DiscoverResultsView from '../views/discoverResultsView.js';
import DiscoverFormView from '../views/discoverFormView.js';
import promiseNoData from '../promiseNoData.js';
import { ApiFetch } from '../apiFetch.js';
import { useInfiniteScroll } from '../model.js';
import { useNavigate } from "react-router-dom";

function DiscoverPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [minScore, setMinScore] = React.useState(1);
    const [maxScore, setMaxScore] = React.useState(10);
    const [sort_by, setSort_by] = React.useState('popularity.desc'); //Final sort and order

    const [nextPage, setNextPage] = React.useState(null);
    const [isFetching, setIsFetching] = useInfiniteScroll(getMoreFeed);
    const [bottom, setBottom] = React.useState(false);
    let navigate = useNavigate();

    async function getMoreFeed() {
        setIsFetching(true);
        if (nextPage && !bottom) {
            setPromise(
                ApiFetch.discoverMovie(sort_by, maxScore, minScore, nextPage)
                    .then((newData) => {
                        if (newData.results.length > 0) {
                            setData(data.concat(newData.results));
                            setIsFetching(false);
                            setNextPage(nextPage + 1)
                        } else {
                            setBottom(bottom);
                        }
                    })
                    .catch((error) => setError(error))
            );
        } else {
            setIsFetching(false);
        }
    }

    React.useEffect(() => {
        setPromise(ApiFetch.discoverMovie(sort_by, maxScore, minScore, 1)
            .then(data => {setData(data.results); setNextPage(2)})
            .catch(error => setError(error)));
    }, [sort_by, maxScore, minScore]);

    return (
        <div>
            <DiscoverFormView minScore={minScore}
                maxScore={maxScore}
                onMinScoreChange={score => setMinScore(score)}
                onMaxScoreChange={score => setMaxScore(score)}
                onSortBy={sort_by => setSort_by(sort_by)}
                onSearch={() => {
                    setData(null);
                    setError(null);
                    if (isFetching === false)
                        setPromise(
                            ApiFetch.discoverMovie(sort_by, maxScore, minScore)
                                .then((data) => {
                                    setData(data.results);
                                    setNextPage(2);
                                })
                                .catch((error) => setError(error))
                        );
                }}
            >
            </DiscoverFormView>

            {promiseNoData(promise, data, error) || <DiscoverResultsView
                discoverResults={data}
                onClick={(id) => {
                    props.model.setCurrentMovie(id);
                    navigate(`/movieDetails`);
                }}
            ></DiscoverResultsView>}
        </div>
    );
}

export default DiscoverPresenter;