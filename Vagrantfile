Vagrant.configure("2") do |config|
    
  config.vm.box = "ubuntu/focal64"

  config.vm.define :vm1 do |vm1|
    vm1.vm.network :private_network, :ip => "192.168.56.10"
    vm1.vm.synced_folder ".", "/vagrant-data"
    vm1.vm.provision "shell", inline: <<-SHELL1
        apt-get update -y > /dev/null 2>&1
        apt-get install -y software-properties-common
        add-apt-repository --yes --update ppa:ansible/ansible
        apt-get install -y ansible
    SHELL1
  end

  config.vm.define :vm2 do |vm2|
    vm2.vm.network :private_network, :ip => "192.168.56.11"
    vm2.vm.provision "shell", inline: <<-SHELL2
        apt-get update -y > /dev/null 2>&1
    SHELL2
  end

  config.vm.provider "virtualbox" do |vb|
    vb.memory = 1024
  end
end
