import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import { PATH } from '../../constants/paths';
import { getsearchApi, searchBarData } from '../../Pages/Search/Search.thunks';
import { SearchCategories } from '../../constants/array';

const mapStateToProps = state => ({
  loading: state.loading,
});

const mapDispatchToProps = {
  getsearchApi,
  searchBarData,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {}

const SearchBar = (props: Props) => {
  const { getsearchApi, searchBarData } = props;
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleCategory = (event: any) => {
    setCategory(event.target.value);
  };

  const search = async (event: any) => {
    event.preventDefault();

    let payload = '';

    if (category !== '' || category !== SearchCategories[0]) {
      payload += `category=${category}&`;
    }

    if (keyword !== '') {
      payload += `q=${keyword}&`;
    }

    if (payload === '') return;

    searchBarData(payload);

    getsearchApi(payload)
      .then(res => {
        navigate(PATH.SEARCH);
        console.log(res);
      })
      .catch(err => {
        console.log(err.payload.message);
      });
  };

  return (
    <div className="w-full flex">
      <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Your Email
      </label>

      <Form.Select
        onChange={handleCategory}
        className="flex-shrink-0 z-10 dropdowns inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
      >
        {SearchCategories.map((item, index) => (
          <option key={index} className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            {item}
          </option>
        ))}
      </Form.Select>

      <div className="relative w-full">
        <input
          type="search"
          onChange={handleKeyword}
          id="search-dropdown"
          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search keyword..."
        />

        <button
          type="submit"
          onClick={search}
          className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>

          <span className="sr-only">Search</span>
        </button>
      </div>
    </div>
  );
};

export default connector(SearchBar);