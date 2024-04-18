import React from 'react';
import './listPage.scss';
import { listData } from '../../lib/dummydata';
import Filter from '../filter/filter';
import Card from '../card/card';
import Map from '../map/map';

function ListPage() {
  const data = listData;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item}></Card>
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
}

export default ListPage;
