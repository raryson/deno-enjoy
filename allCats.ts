// TODO: Make title appear together with file

(async () => {
    const folderPath = Deno.args[1]
    const fileList = await Deno.readDir(folderPath)

    fileList.map(async (file) => {
        const openedFile = await Deno.open(file.name);
        renderFile(openedFile, file.name)
    })
  })();

  const renderFile = async (openedFile, fileName) => {
    console.log(`Opened file ${fileName}`)
    await Deno.copy(Deno.stdout, openedFile);
  }