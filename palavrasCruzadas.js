function verificar_palavra1() {
    var cpu = inpt_cpu.value;
    if(cpu.toUpperCase() == "CPU"){
      cpuC.innerHTML = `C`;
      cpuP.innerHTML = `P`;
      cpuU.innerHTML = `U`;
    }
  }

  function verificar_palavra2() {
    var ula = inpt_ula.value;
    if(ula.toUpperCase() == "ULA"){
      ulaU.innerHTML = `U`;
      ulaL.innerHTML = `L`;
    }
  }

  function verificar_palavra3() {
    var registrad = inpt_registrad.value; 

    if(registrad.toUpperCase() == "REGISTRADORES"){
      regR1.innerHTML = `R`;
      regE.innerHTML = `E`;
      regG.innerHTML = `G`;
      regI.innerHTML = `I`;
      regT.innerHTML = `T`;
      regR2.innerHTML = `R`;
      regA.innerHTML = `A`;
      regD.innerHTML = `D`;
      regO.innerHTML = `O`;
      regR3.innerHTML = `R`;
      quadE.innerHTML = `E`;
      regS2.innerHTML = `S`;
    }
  }

  function verificar_palavra4() {
    var ram = inpt_ram.value;
    if(ram.toUpperCase() == "RAM"){
      ramR.innerHTML = `R`;
      ramA.innerHTML = `A`;
      ramM.innerHTML = `M`;
    }
  }

  function verificar_palavra5() {
    var rom = inpt_rom.value;
    if(rom.toUpperCase() == "ROM"){
      romO.innerHTML = `O`;
      romM.innerHTML = `M`;
    }
  }

  function verificar_palavra6() {
    // EPROM
    var eprom = inpt_eprom.value;
    if(eprom.toUpperCase() == "EPROM"){
      epromE.innerHTML = `E`;
      epromP.innerHTML = `P`;
      epromR.innerHTML = `R`;
      epromM.innerHTML = `M`;
    }

  }

  function verificar_palavra7() {
    // FLASH
    var flash = inpt_flash.value;
    if(flash.toUpperCase() == "FLASH"){
      flashF.innerHTML = `F`;
      flashL.innerHTML = `L`;
      flashS.innerHTML = `S`;
      flashH.innerHTML = `H`;
    }

  }



  function verificar_palavra9() {
    // dma
    var dma = inpt_dma.value

    if(dma.toUpperCase() == "DMA"){
      dmaM.innerHTML = `M` ;
      dmaA.innerHTML = `A`;
    }
  }

  function verificar_palavra10() {
    // chipSelect
    var cs = inpt_cs.value;
    if(cs.toUpperCase() == "CHIPSELECT"){
      csC.innerHTML = `C`;
      csH.innerHTML = `H`;
      csI.innerHTML = `I`;
      csP.innerHTML = `P`;
      csE.innerHTML = `E`;
      csL.innerHTML = `L`;
      csC2.innerHTML = `C`;
      csT.innerHTML = `T`;
    }

  }

  // function verificar_palavra11() {
  //   // addressBus

  // }

  function verificar_palavra12() {
    // dataBus
    var dataBus = inpt_data.value;
    if(dataBus.toUpperCase() == "DATABUS"){
      dcD.innerHTML = `D`;
      dtA.innerHTML = `A`;
      dtT.innerHTML = `T`;
      ramA.innerHTML = `A`;
      dtB.innerHTML = `B`;
      dtU.innerHTML = `U`;
      dtS.innerHTML = `S`;
    }

  }

  function verificar_palavra13() {
    // i5
    var i5 = inpt_i5.value;
    if(i5.toUpperCase() == "I5"){
      i55.innerHTML = `5`;
    }

  }

  function verificar_palavra14() {
    // i7
    var i7 = inpt_i7.value;
    if(i7.toUpperCase() == "I7"){
      regI.innerHTML = `I`;
      i77.innerHTML = `7`;
    }

  }

  function verificar_palavra15() {
    // dual core
    var dualCore = inpt_dual.value;

    if(dualCore.toUpperCase() == "DUALCORE"){
      dcD.innerHTML = `D`;
      cpuU.innerHTML = `U`;
      dcA.innerHTML = `A`;
      dcL.innerHTML = `L`;
      dcC.innerHTML = `C`;
      dcO.innerHTML = `O`;
      dcR.innerHTML = `R`;
      dcE.innerHTML = `E`;
    }



  }

  function verificar_palavra16() {
    // quad core
    var quadCore = inpt_quad.value;
    if(quadCore.toUpperCase() == "QUADCORE"){
      quadQ.innerHTML = `Q`;
      quadU.innerHTML = `U`;
      quadA.innerHTML = `A`;
      quadD.innerHTML = `D`;
      quadC.innerHTML = `C`;
      quadO.innerHTML = `O`;
      quadR.innerHTML = `R`;
      quadE.innerHTML = `E`;
    }

  }