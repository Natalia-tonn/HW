function ListsComponent(){
    return(
        <div>
  <ol>
    <li>Первый элемент
      <ul>
        <li>элемент 1</li>
        <li>элемент 2</li>
      </ul>
    </li>
    <li>Второй элемент</li>
  </ol>

  <ul>
    <li>Первый элемент
      <ol>
        <li>элемент 1</li>
        <li>элемент 2</li>
      </ol>
    </li>
    <li>Второй элемент</li>
  </ul>
</div>
    )
}
export default ListsComponent