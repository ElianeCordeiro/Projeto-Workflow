Vagrant.configure("2") do |config|
    
  config.vm.box = "ubuntu/focal64"

  config.vm.define :vm1 do |vm1|
    vm1.vm.network :private_network, :ip => "192.168.56.10"
    vm1.vm.synced_folder ".", "/vagrant-data"
    vm1.vm.provision "shell", inline: <<-SHELL1
        curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
        apt-get update
        apt-get install nodejs -y
        cp -r /vagrant-data /home/vagrant/app
    SHELL1
  end

  config.vm.define :vm2 do |vm2|
    vm2.vm.network :private_network, :ip => "192.168.56.11"
    vm2.vm.provision "shell", inline: <<-SHELL2
        apt-get update
        apt-get install -y curl
    SHELL2
  end

  config.vm.provider "virtualbox" do |vb|
    vb.memory = 1024
  end
end
