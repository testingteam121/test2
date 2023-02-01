function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module)
    return;
  if (!gameInstance.logo)
  {
  gameInstance.logo = document.getElementById("custom-logo");
    gameInstance.logo.style.display = "block";
    gameInstance.container.appendChild(gameInstance.logo);
  }
    if(progress == 1)
    {
      gameInstance.logo.style.display = "none";
  }
}