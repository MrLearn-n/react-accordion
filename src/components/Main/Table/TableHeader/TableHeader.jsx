import React from "react";
import style from './TableHeader.module.css'

export const TableHeader = () => {
  return (
    <div className={style.header}>
      <div className={style.box}>
        <p>Дата</p>
      </div>
      <div className={style.box}>
        <p>Шифр задачи</p>
      </div>
      <div className={style.box}>
        <p>Шифр проекта</p>
      </div>
      <div className={style.box}>
        <p>Задача</p>
      </div>
      <div className={style.box}>
        <p>Статус</p>
      </div>
      <div className={style.box}>
        <p>Ответственный</p>
      </div>
      <div className={style.box}>
        <p>Переназначить</p>
      </div>
      <div className={style.box}>
        <p>Приоритет</p>
      </div>
      <div className={style.box}>
        <p>Комментарий</p>
      </div>
      <div className={style.box}>
        <p>План время</p>
      </div>
      <div className={style.box}>
        <p>Факт время</p>
      </div>
      <div className={style.box}>
        <p>Начал</p>
      </div>
      <div className={style.box}>
        <p>Завершил</p>
      </div>
    </div>
  );
};
